const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const Cart = require("./cart");

const productDataPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFileThroughCb = (cb) => {
  fs.readFile(productDataPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent) || []);
    }
  });
};

const writeProductsToFile = (data) => {
  fs.writeFile(productDataPath, JSON.stringify(data), (err) => {
    if (err) {
      console.error("error occurred: ", err);
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFileThroughCb((products) => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          ({ id }) => id === this.id
        );

        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        writeProductsToFile(updatedProducts);
      } else {
        this.id = uuidv4();
        products.push(this);
        writeProductsToFile(products);
      }
    });
  }

  // this one is called not on instance but on entire class;
  static fetchAll(cb) {
    getProductsFromFileThroughCb(cb);
  }

  static deleteById(id) {
    getProductsFromFileThroughCb((products) => {
      const deletedProduct = products.find((product) => product.id === id);
      const updatedProducts = products.filter((product) => product.id !== id);
      writeProductsToFile(updatedProducts);
      Cart.deleteProduct(id, deletedProduct.price);
    });
  }

  static findById(id, cb) {
    getProductsFromFileThroughCb((products) => {
      const product = products.find((item) => item.id === id);
      cb(product);
    });
  }
};
