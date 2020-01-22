## **Store API Routes**

## **Get Products**

_Retrieves all products._

- **URL**

  /products

- **Method:**

`GET`

- **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ title : String, description: String, price: Number }`

* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  - **Code:** 404 ERROR <br />
    **Content:** `{ error : "Products Not Found" }`

- **Sample Call:**

  axios.get('/api/products')

## **Get Product**

Retrieve product by id;

- **URL**
  /api/products/:id

- **Method:**
  `GET`

- **URL Params**

  **Required:**

  `id=[String]`

* **Data Params**

  None

* **Success Response:**

- **Code:** 200 <br />
  **Content:** `{title: String, description: String, price: Number}`

- **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Product Not Found" }`

- **Sample Call:**

  axios.get('/api/products/32')

## **Post Product**

Create a new product;

- **URL**
  /api/products/

- **Method:**
  `POST`

- **URL Params**

  None

* **Data Params**

  `{title: [String], description: [String], price: [Number], cost: [Number], quantity: [Number]}`

* **Success Response:**

- **Code:** 201 <br />
  **Content:** `{product: [Object]}`

- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "A problem occurred with the server" }`

- **Sample Call:**

  `axios.post('/api/products/', {title: 'ball', description: 'Round and bouncy', price: 2.99, cost: 1.50, quantity: 200})`

## **Update Product**

Edit a product;

- **URL**
  /api/products/:id

- **Method:**
  `PUT`

- **URL Params**

  `id=[String]`

* **Data Params**

  `{title: [String], description: [String], price: [Number], cost: [Number], quantity: [Number]}`

* **Success Response:**

- **Code:** 200 <br />
  **Content:** `{product: [Object]}`

- **Error Response:**

* **Code:** 404 NOT FOUND <br />
  **Content:** `{ error : "Product not found" }`

* **Sample Call:**

  `axios.put('/api/products/34543534', {title: 'ball', description: 'Round and bouncy', price: 3.50, cost: 1.50, quantity: 175})`

## **Create Sale**

Create a new customer sale

- **URL**
  /api/sales/

- **Method:**
  `POST`

- **URL Params**

  `None`

* **Data Params**

  `{customerId: [String], items: [productId = [String]], subtotal: [Number], tax: [Number], total: [Number]}`

* **Success Response:**

- **Code:** 201 <br />
  **Content:** `{sale: [Object]}`

- **Error Response:**

* **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:** `{ error : "A problem occured with the server" }`

* **Sample Call:**

  `axios.post('/api/sales', {customerId: 'af3c3dd333234a3', items: ['322325453253', '24523453254325'], subtotal: 32.50, tax: 2.68, total: 35.18})`

## **Get Sale**

_Retrieves sale._

- **URL**

  /sale/:id

- **Method:**

`GET`

- **URL Params**

  `id = [String]`

* **Data Params**

  None

* **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `{customerId: [String], items: [productId = [String]], subtotal: [Number], tax: [Number], total: [Number]}`

* **Error Response:**

- **Code:** 404 ERROR <br />
  **Content:** `{ error : "Sale Not Found" }`

- **Sample Call:**

  axios.get('/api/sales/153456')

## **Get All Sales**

_Retrieves all sales._

- **URL**

  /sales/

- **Method:**

`GET`

- **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `{sales:[{customerId: [String], items: [productId = [String]], subtotal: [Number], tax: [Number], total: [Number]}}]`

* **Error Response:**

- **Code:** 500 ERROR <br />
  **Content:** `{ error : "Server error" }`

- **Sample Call:**

  axios.get('/api/sales')

## **Update Sale**

Edit a sale;

- **URL**
  /api/sales/:id

- **Method:**
  `PUT`

- **URL Params**

  `id=[String]`

* **Data Params**

  `{customerId: [String], items: [productId = [String]], subtotal: [Number], tax: [Number], total: [Number]}`

* **Success Response:**

- **Code:** 200 <br />
  **Content:** `{sale: [Object]}`

- **Error Response:**

* **Code:** 404 NOT FOUND <br />
  **Content:** `{ error : "Sale not found" }`

* **Sample Call:**

  `axios.put('/api/sales/34543534', {customerId: 'af3c3dd333234a3', items: ['322325453253', '24523453254325', '2343241432342'], subtotal: 32.50, tax: 2.68, total: 35.18})`

## **Delete Sale**

Delete a sale;

- **URL**
  /api/sales/:id

- **Method:**
  `DELETE`

- **URL Params**

  `id=[String]`

* **Data Params**

  None

* **Success Response:**

- **Code:** 204 <br />
  **Content:** `None`

- **Error Response:**

* **Code:** 401 UNAUTHORIZED <br />
  **Content:** `{ error : "Please login to complete this task" }`

* **Sample Call:**

  `axios.delete('/api/sales/34543534',)`

## **Create Customer**

Create a new customer

- **URL**
  /api/customers/

- **Method:**
  `POST`

- **URL Params**

  `None`

* **Data Params**

  `{name: [String], email:[String], phone: [Number], address: {street: [String], city: [String], state: [String]}}`

* **Success Response:**

- **Code:** 201 <br />
  **Content:** `{customer: [Object]}`

- **Error Response:**

* **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:** `{ error : "A problem occured with the server" }`

* **Sample Call:**

  `axios.post('/api/customers', {name: [String], email:[String], phone: [Number], address: {street: [String], city: [String], state: [String]}}`

## **Get Customer**

_Retrieves customer._

- **URL**

  /customer/:id

- **Method:**

`GET`

- **URL Params**

  `id = [String]`

* **Data Params**

  None

* **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `{name: [String], email:[String], phone: [Number], address: {street: [String], city: [String], state: [String]}, purchaseHistory: [purchaseId=[String]]}`

* **Error Response:**

- **Code:** 404 ERROR <br />
  **Content:** `{ error : "Customer Not Found" }`

- **Sample Call:**

  axios.get('/api/customers/153456')

## **Get All Customers**

_Retrieves all customers._

- **URL**

  /customers/

- **Method:**

`GET`

- **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `{customers: [{name: [String], email:[String], phone: [Number], address: {street: [String], city: [String], state: [String]}, purchaseHistory: [purchaseId=[String]]}]}`

* **Error Response:**

- **Code:** 500 ERROR <br />
  **Content:** `{ error : "Server error" }`

- **Sample Call:**

  axios.get('/api/customers')

## **Update Customer**

Edit a customer;

- **URL**
  /api/customers/:id

- **Method:**
  `PUT`

- **URL Params**

  `id=[String]`

* **Data Params**

  `{name: [String], email:[String], phone: [Number], address: {street: [String], city: [String], state: [String]}, purchaseHistory: [purchaseId=[String]]}`

* **Success Response:**

- **Code:** 200 <br />
  **Content:** `{customer: [Object]}`

- **Error Response:**

* **Code:** 404 NOT FOUND <br />
  **Content:** `{ error : "Customer not found" }`

* **Sample Call:**

  `axios.put('/api/customers/34543534', {name: 'John Doe', email: 'jdoe@gmail.com', phone: 5555555555, address: {street: '123 Main', city: 'San Francisco', state: 'CA'}, purchaseHistory: ['4456432', '354351', '543551']}`

## **Delete Customer**

Delete a customer;

- **URL**
  /api/customers/:id

- **Method:**
  `DELETE`

- **URL Params**

  `id=[String]`

* **Data Params**

  None

* **Success Response:**

- **Code:** 204 <br />
  **Content:** `None`

- **Error Response:**

* **Code:** 401 UNAUTHORIZED <br />
  **Content:** `{ error : "Please login to complete this task" }`

* **Sample Call:**

  `axios.delete('/api/customers/34543534',)`

## **Create Vendor**

Create a new vendor

- **URL**
  /api/vendors/

- **Method:**
  `POST`

- **URL Params**

  `None`

* **Data Params**

  `{name: [String], email:[String], phone: [Number], address: {street: [String], city: [String], state: [String]}, contact: [String], owed: [Number]}`

* **Success Response:**

- **Code:** 201 <br />
  **Content:** `{vendor: [Object]}`

- **Error Response:**

* **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:** `{ error : "A problem occured with the server" }`

* **Sample Call:**

  `axios.post('/api/vendors', {name: 'Sample Industries', email: contact@sample.com, phone: 5239484876, address: {street: '123 Sample St', city: 'San Francisco', state: 'CA'}, contact: 'John', owed: 150.93}`

## **Get Vendor**

_Retrieves vendor._

- **URL**

  /vendor/:id

- **Method:**

`GET`

- **URL Params**

  `id = [String]`

* **Data Params**

  None

* **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `{name: [String], email:[String], phone: [Number], address: {street: [String], city: [String], state: [String]}, contact: [String], owed: [Number]}`

* **Error Response:**

- **Code:** 404 ERROR <br />
  **Content:** `{ error : "Vendor Not Found" }`

- **Sample Call:**

  axios.get('/api/vendors/153456')

## **Get All Vendors**

_Retrieves all vendors._

- **URL**

  /vendors/

- **Method:**

`GET`

- **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `{vendors: [{name: [String], email:[String], phone: [Number], address: {street: [String], city: [String], state: [String]}, contact: [String], owed: [Number]}]}`

* **Error Response:**

- **Code:** 500 ERROR <br />
  **Content:** `{ error : "Server error" }`

- **Sample Call:**

  axios.get('/api/vendors')

## **Update Vendor**

Edit a vendor;

- **URL**
  /api/vendors/:id

- **Method:**
  `PUT`

- **URL Params**

  `id=[String]`

* **Data Params**

  `{name: [String], email:[String], phone: [Number], address: {street: [String], city: [String], state: [String]}, purchaseHistory: [purchaseId=[String]]}`

* **Success Response:**

- **Code:** 200 <br />
  **Content:** `{vendor: [Object]}`

- **Error Response:**

* **Code:** 404 NOT FOUND <br />
  **Content:** `{ error : "Vendor not found" }`

* **Sample Call:**

  `axios.put('/api/vendors/34543534', {name: 'Sample Industries', email: contact@sample.com, phone: 123456789, address: {street: '123 Sample St', city: 'San Francisco', state: 'CA'}, contact: 'John', owed: 150.93}`

## **Delete Vendor**

Delete a vendor;

- **URL**
  /api/vendors/:id

- **Method:**
  `DELETE`

- **URL Params**

  `id=[String]`

* **Data Params**

  None

* **Success Response:**

- **Code:** 204 <br />
  **Content:** `None`

- **Error Response:**

* **Code:** 401 UNAUTHORIZED <br />
  **Content:** `{ error : "Please login to complete this task" }`

* **Sample Call:**

  `axios.delete('/api/vendors/34543534',)`

## **Create Purchase**

Create a new purchase

- **URL**
  /api/purchases/

- **Method:**
  `POST`

- **URL Params**

  `None`

* **Data Params**

  `{products: [{productId: [String], cost: [Number], quantity: [Number]}], purchaseOrder: [Number]}`

* **Success Response:**

- **Code:** 201 <br />
  **Content:** `{purchase: [Object]}`

- **Error Response:**

* **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:** `{ error : "A problem occured with the server" }`

* **Sample Call:**

  `axios.post('/api/purchases', {name: 'Sample Industries', email: contact@sample.com, phone: 5239484876, address: {street: '123 Sample St', city: 'San Francisco', state: 'CA'}, contact: 'John', owed: 150.93}`

## **Get Purchase**

_Retrieves purchase._

- **URL**

  /purchase/:id

- **Method:**

`GET`

- **URL Params**

  `id = [String]`

* **Data Params**

  None

* **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `{name: [String], email:[String], phone: [Number], address: {street: [String], city: [String], state: [String]}, contact: [String], owed: [Number]}`

* **Error Response:**

- **Code:** 404 ERROR <br />
  **Content:** `{ error : "Purchase Not Found" }`

- **Sample Call:**

  axios.get('/api/purchases/153456')

## **Get All Purchases**

_Retrieves all purchases._

- **URL**

  /purchases/

- **Method:**

`GET`

- **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `{purchases: [{name: [String], email:[String], phone: [Number], address: {street: [String], city: [String], state: [String]}, contact: [String], owed: [Number]}]}`

* **Error Response:**

- **Code:** 500 ERROR <br />
  **Content:** `{ error : "Server error" }`

- **Sample Call:**

  axios.get('/api/purchases')

## **Update Purchase**

Edit a purchase;

- **URL**
  /api/purchases/:id

- **Method:**
  `PUT`

- **URL Params**

  `id=[String]`

* **Data Params**

  `{name: [String], email:[String], phone: [Number], address: {street: [String], city: [String], state: [String]}, purchaseHistory: [purchaseId=[String]]}`

* **Success Response:**

- **Code:** 200 <br />
  **Content:** `{purchase: [Object]}`

- **Error Response:**

* **Code:** 404 NOT FOUND <br />
  **Content:** `{ error : "Purchase not found" }`

* **Sample Call:**

  `axios.put('/api/purchases/34543534', {name: 'Sample Industries', email: contact@sample.com, phone: 123456789, address: {street: '123 Sample St', city: 'San Francisco', state: 'CA'}, contact: 'John', owed: 150.93}`

## **Delete Purchase**

Delete a purchase;

- **URL**
  /api/purchases/:id

- **Method:**
  `DELETE`

- **URL Params**

  `id=[String]`

* **Data Params**

  None

* **Success Response:**

- **Code:** 204 <br />
  **Content:** `None`

- **Error Response:**

* **Code:** 401 UNAUTHORIZED <br />
  **Content:** `{ error : "Please login to complete this task" }`

* **Sample Call:**

  `axios.delete('/api/purchases/34543534',)`
