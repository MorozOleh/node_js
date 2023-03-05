const ROUT_PATH = {
  root: "/",
  cart: "/cart",
  cartDeleteItem: "/cart-delete-item",
  about: "/about",
  orders: "/orders",
  product: "/product",
  productsWithId: "/product/:id",
  products: "/products",
  checkout: "/checkout",
  addProduct: "/add-product",
  editProduct: "/edit-product",
  deleteProduct: "/delete-product",
  editProductWithId: "/edit-product/:id",
};

const ADMIN_ACTION_ROUT_PATH = {
  product: "/admin/product",
};

const PORT = 3000;

module.exports = { ROUT_PATH, PORT, ADMIN_ACTION_ROUT_PATH };
