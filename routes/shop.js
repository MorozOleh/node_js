const express = require("express");
const adminData = require("./admin");

const router = express.Router();

const { ROUT_PATH } = require("../constants");

router.get(ROUT_PATH.root, (_, res) => {
  const { products } = adminData;
  console.log(products);
  res.render("shop", { prods: products, pageTitle: "Shop Page", path: "/" });
});

module.exports = router;
