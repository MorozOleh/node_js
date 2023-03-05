const express = require("express");
const shopController = require("../controllers/shop");
const { ROUT_PATH } = require("../constants");

const router = express.Router();

router.get(ROUT_PATH.products, shopController.getProducts);
router.get(ROUT_PATH.cart, shopController.getCart);
router.post(ROUT_PATH.cart, shopController.postCart);
router.post(ROUT_PATH.cartDeleteItem, shopController.postDeleteCartProduct);
router.get(ROUT_PATH.orders, shopController.getOrders);
// the order does matter, we need to keep in mind that specific route comes first,
// after that route with id has to go;
router.get(ROUT_PATH.productsWithId, shopController.getProduct);
router.get(ROUT_PATH.checkout, shopController.getCheckout);
router.get(ROUT_PATH.root, shopController.getIndex);

module.exports = router;
