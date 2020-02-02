const express = require("express");
const { Product } = require("../../db");
const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const uuidv4 = require("uuid/v4");

const router = express.Router();

const s3 = new aws.S3({ apiVersion: "2006-03-01" });
const BUCKET = process.env.BUCKET || "store-images-jkc";

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: BUCKET,
    acl: "public-read",
    key: (req, file, callback) => {
      const extension = file.mimetype.split("/")[1];
      const uuid = uuidv4();
      // the callback assigns the key for the file in S3
      callback(null, `${uuid}.${extension}`);
    },
    contentType: multerS3.AUTO_CONTENT_TYPE
  })
});

const removeImagesFromS3 = images => {
  const imageKeys = images.map(image => ({ Key: image.key }));
  const params = {
    Bucket: BUCKET,
    Delete: {
      Objects: imageKeys
    }
  };
  s3.deleteObjects(params, (err, data) => {
    if (err) throw err;
  });
};

const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await new Product(productData).save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInfo = req.body;
    await Product.findByIdAndUpdate(id, updatedInfo);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getAllProducts = async (req, res) => {
  try {
    let limit;
    if (!req.query.limit) {
      limit = 10;
    } else {
      limit = Number(req.query.limit);
    }
    let offset;
    if (!req.query.offset) {
      offset = 0;
    } else {
      offset = Number(req.query.offset);
    }

    const numRecords = await Product.countDocuments();
    const skipCount = limit * offset;
    const data = await Product.find()
      .skip(skipCount)
      .limit(limit);

    const numPages = numRecords / limit;
    const result = { data, numPages, offset, limit };

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await Product.findById(id);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

// Needs documentatation in readme
//-=-
const getProduct = async (req, res) => {
  try {
    const { lookupField } = req.query;
    const { lookupValue } = req.query;
    const results = await Product.find({ [lookupField]: lookupValue });
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const target = await Product.findById(id);
    await removeImagesFromS3(target.images);
    await Product.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ err });
  }
};

// Needs documentatation in readme
//-=-
const uploadImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { key, location } = req.file;
    const target = await Product.findById(id);
    target.images.push({ key, location });
    await target.save();
    res.status(204).send();
  } catch (err) {
    res.status(402).json(err);
  }
};

// Needs documentatation in readme
//-=-
const deleteImage = async (req, res) => {
  const { id } = req.params;
  const imageKeyToRemove = req.body;
  await removeImagesFromS3([imageKeyToRemove]);
  const target = await Product.findById(id);
  target.images.filter(image => image.key !== imageKeyToRemove);
};

router.post("/:id/image/", upload.single("images"), uploadImage);
router.put("/:id/image/", upload.single("images"), uploadImage);
router.delete("/:id/image/:key", deleteImage);
router.put("/:id", updateProduct);
router.post("/", upload.single("images"), createProduct);
router.get("/:id", getProductById);
router.get("/", getAllProducts);
router.get(/\/?/, getProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
