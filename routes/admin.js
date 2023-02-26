const express = require("express");
const { ROUT_PATH } = require("../constants");

const router = express.Router();
const products = [];

router.post(ROUT_PATH.addProduct, (req, res) => {
  products.push({ title: req.body.title });

  res.redirect(ROUT_PATH.root);
});

router.get(ROUT_PATH.addProduct, (_, res) => {
  res.render("add-product", {
    pageTitle: "Add Product Page",
    path: "/admin/add-product",
  });
});

module.exports = { router, products };
