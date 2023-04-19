const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define("cart", {
  items: { type: Sequelize.ARRAY(Sequelize.STRING), defaultValue: [] },
});

module.exports = Cart;

/**
 * instanceMethods
 */
