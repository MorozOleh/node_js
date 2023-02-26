const express = require("express");
const path = require("path");
const { ROUT_PATH } = require("../constants");
const rootDir = require("../util/path");

const router = express.Router();

router.post(ROUT_PATH.product, (_, res) => {
  res.redirect(ROUT_PATH.home);
});

router.use(ROUT_PATH.addProduct, (_, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

module.exports = router;
