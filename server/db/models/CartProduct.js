const Sequelize = require("sequelize");
const db = require("../db");
const Product = require("./Product");

const CartProduct = db.define("cartproduct", {
  qty: {
    type: Sequelize.INTEGER,
  },
});

CartProduct.beforeBulkCreate(
  async (cartProducts) => {
    const productIds = cartProducts.map((cartProduct) => cartProduct.productId);
    const products = await Product.findAll({
      where: { id: productIds },
    });

    for (const cartProduct of cartProducts) {
      const product = products.find(
        (product) => product.id === cartProduct.productId
      );
      cartProduct.qty = product.qty;
    }
  },
  { include: [Product] }
);

module.exports = CartProduct;
