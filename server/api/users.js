const router = require("express").Router();
const {
  models: { User, Cart, Product },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }

  router.get("/:id", async (req, res, next) => {
    try {
      const userCart = await Cart.findAll(
        { where: { userId: req.params.id } },
        {
          include: {
            model: Product, //This include doesn't seem to do anything yet
          },
        }
      );
      res.json(userCart);
    } catch (error) {
      next(error);
    }
  });
});
