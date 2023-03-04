const express = require("express");
const { getProducts } = require("../controllers/products");
const { ROUT_PATH } = require("../constants");

const router = express.Router();

router.get(ROUT_PATH.root, getProducts);

module.exports = router;
