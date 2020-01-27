const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
