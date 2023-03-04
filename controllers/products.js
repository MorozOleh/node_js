const { ROUT_PATH } = require("../constants");
const Product = require("../models/product");

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();

  res.redirect(ROUT_PATH.root);
};

exports.getAddProduct = (_, res) => {
  res.render("add-product", {
    pageTitle: "Add Product Page",
    path: "/admin/add-product",
  });
};

exports.getProducts = (_, res) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop Page",
      path: "/",
    });
  });
};
