//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const Cart = require("./models/Cart");
const CartProduct = require("./models/CartProduct");

//associations could go here!
// User.hasMany(Order);
// Order.belongsTo(User);

// Order.hasOne(Cart);
// Cart.belongsTo(Order);
// Product.belongsTo(Cart);
// Cart.hasMany(Product);

User.hasMany(Cart);
User.hasMany(Order);

Product.belongsToMany(Cart, { through: CartProduct });
Product.belongsToMany(Order, { through: "OrderProduct" });

Cart.belongsToMany(Product, { through: CartProduct });
Cart.belongsTo(User);

Order.belongsToMany(Product, { through: "OrderProduct" });
Order.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Cart,
    CartProduct,
  },
};
