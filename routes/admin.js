const express = require("express");
const { ROUT_PATH } = require("../constants");
const adminController = require("../controllers/admin");

const router = express.Router();
// /admin/add-product => GET;
router.get(ROUT_PATH.addProduct, adminController.getAddProduct);

// /admin/products => GET;
router.get(ROUT_PATH.products, adminController.getProducts);

// /admin/add-product => POST;
router.post(ROUT_PATH.addProduct, adminController.postAddProduct);

// admin/edit-product => GET;
router.get(ROUT_PATH.editProductWithId, adminController.getEditProduct);

// admin/edit-product => POST;
router.post(ROUT_PATH.editProduct, adminController.postEditProduct);

// admin/delete-product => POST (as DELETE)
router.post(ROUT_PATH.deleteProduct, adminController.postDeleteProduct);
module.exports = router;
