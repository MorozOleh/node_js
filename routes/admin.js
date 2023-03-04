const express = require("express");
const { ROUT_PATH } = require("../constants");
const { postAddProduct, getAddProduct } = require("../controllers/products");

const router = express.Router();

router.post(ROUT_PATH.addProduct, postAddProduct);
router.get(ROUT_PATH.addProduct, getAddProduct);

module.exports = router;
