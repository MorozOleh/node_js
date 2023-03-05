const Product = require("../models/product");
const { ROUT_PATH } = require("../constants");

exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();

  res.redirect(ROUT_PATH.root);
};

exports.getAddProduct = (_, res) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product Page",
    path: "/admin/add-product",
    editing: false,
  });
};
exports.getEditProduct = (req, res) => {
  const editMode = Boolean(req.query.edit);
  const id = req.params.id;

  Product.findById(id, (product) => {
    // This is not the best user experience
    // but for not it is decent indeed;
    // It is definitely better than nothing;
    if (!editMode || !product) {
      res.redirect(ROUT_PATH.root);
    }

    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: editMode,
      product,
    });
  });
};

exports.postEditProduct = (req, res) => {
  const id = req.body.id;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;

  const updatedProduct = new Product(
    id,
    updatedTitle,
    updatedImageUrl,
    updatedDescription,
    updatedPrice
  );
  updatedProduct.save();

  res.redirect(`/product/${id}`);
};

exports.postDeleteProduct = (req, res) => {
  const id = req.body.id;

  Product.deleteById(id);
  res.redirect("/admin/products");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "All products",
      path: "/admin/products",
    });
  });
};
