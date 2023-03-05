const { ROUT_PATH } = require("../constants");
const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getIndex = (_, res) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};
exports.getProducts = (_, res) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res) => {
  const productId = req.params.id;

  Product.findById(productId, (product) => {
    res.render("shop/product-detail", {
      pageTitle: product.title,
      path: "/products",
      product,
    });
  });
};

exports.getCart = (_, res) => {
  Cart.fetchCart((cart) => {
    Product.fetchAll((products) => {
      productsInCart =
        cart.products.reduce((acc, { id, quantity }) => {
          for (const product of products) {
            if (id === product.id) {
              acc.push({ product, quantity });
              return acc;
            }
          }
        }, []) || [];

      res.render("shop/cart", {
        pageTitle: "Cart",
        path: "/cart",
        products: productsInCart,
      });
    });
  });
};

exports.postCart = (req, res) => {
  const id = req.body.id;

  Product.findById(id, (product) => {
    Cart.addProduct(id, product.price);
  });
  res.redirect(`${ROUT_PATH.product}/${id}`);
};

exports.postDeleteCartProduct = (req, res) => {
  const id = req.body.id;
  Product.findById(id, (product) => {
    Cart.deleteProduct(id, product.price);
    res.redirect(ROUT_PATH.cart);
  });
};

exports.getCheckout = (_, res) => {
  res.render("/shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

exports.getOrders = (_, res) => {
  res.render("shop/orders", {
    pageTitle: "Orders",
    path: "/orders",
  });
};
