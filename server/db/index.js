//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const OrderProduct = require("./models/OrderProduct");

//associations could go here!
User.hasMany(Order);
Order.hasOne(User);
Order.hasOne(OrderProduct);
OrderProduct.hasOne(Order);
Product.hasOne(OrderProduct);
OrderProduct.hasMany(Product);

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    OrderProduct,
  },
};
