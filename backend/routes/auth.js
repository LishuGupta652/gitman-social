const router = require("express").Router();

const { registerValidation, loginValidation } = require("../validate");
const User = require("../models/user");

router.get("/", (req, res) => {
  res.send("user route");
});

// REGISTER
router.post("/register", async (req, res) => {
  // Validating the data
  const { error, data } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    return res.send("hi");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
