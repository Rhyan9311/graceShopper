const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

<<<<<<< Updated upstream
router.post("/:productId/cart", async (req, res, next) => {
  try {
    const productId = req.params.id.productId;
    // const userId = req.user.id;
    const product = await Product.findByPk(productId);

    if (!product) {
      res.status(404).send("Product not found");
      return;
    }

    await req.user.addProductToCart(productId);
    res.json({ message: "Product added to cart" });
=======
router.put("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    res.send(await product.update({ qty: req.body.qty }));
>>>>>>> Stashed changes
  } catch (error) {
    next(error);
  }
});
