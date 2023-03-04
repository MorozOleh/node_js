const path = require("path");
const fs = require("fs");

const productDataPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(productDataPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent) || []);
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(productDataPath, JSON.stringify(products), (err) => {
        if (err) {
          console.error("error occurred: ", err);
        }
      });
    });
  }

  // this one is called not on instance but on entire class;
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  whatIsThis() {
    console.log("what is this", this);
  }
};
