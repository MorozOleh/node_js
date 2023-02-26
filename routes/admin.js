const express = require("express");
const path = require("path");
const { ROUT_PATH } = require("../constants");

const router = express.Router();

router.post(ROUT_PATH.product, (_, res) => {
  res.redirect(ROUT_PATH.home);
});

router.use(ROUT_PATH.addProduct, (_, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

module.exports = router;
