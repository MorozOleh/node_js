const path = require("path");
const fs = require("fs");

const cartDataPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "cart.json"
);

const getCartFromFileThroughCb = (cb) => {
  fs.readFile(cartDataPath, (err, fileContent) => {
    let cart = { products: [], totalPrice: 0 };

    if (err) {
      console.log("error occurred with reading cart file: ", err);
      cb(cart);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

const writeCartToFile = (data) => {
  fs.writeFile(cartDataPath, JSON.stringify(data), (err) => {
    if (err) {
      console.log("error occurred with writing cart to file: ", err);
    }
  });
};

module.exports = class Cart {
  static addProduct(id, productPrice) {
    getCartFromFileThroughCb((cart) => {
      const existingProductIndex = cart.products.findIndex(
        (item) => item.id === id
      );
      const existingProduct = cart.products[existingProductIndex];

      let updatedProduct;

      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.quantity += 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id, quantity: 1 };
        cart.products = [...cart.products, updatedProduct];
      }

      cart.totalPrice += parseFloat(productPrice) ?? 0;

      writeCartToFile(cart);
    });

    // Fetch the previous cart;
    // Analyze the cart => Find existing product;
    // add new product/ increase quantity;
  }

  static deleteProduct(id, productPrice) {
    getCartFromFileThroughCb((cart) => {
      const existingProduct = cart.products.find(
        (product) => product.id === id
      );

      if (existingProduct) {
        cart.totalPrice -= productPrice * existingProduct.quantity;
        cart.products = cart.products.filter((product) => product.id !== id);
        writeCartToFile(cart);
      }
    });
  }

  static fetchCart(cb) {
    getCartFromFileThroughCb(cb);
  }
};
