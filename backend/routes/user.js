const router = require("express").Router();
const { registerValidation, loginValidation } = require("../validate");
router.get("/", (req, res) => {
  res.send("user route");
});

module.exports = router;
