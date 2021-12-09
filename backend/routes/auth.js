const router = require("express").Router();

const { registerValidation, loginValidation } = require("../validate");
const User = require("../models/user");

router.get("/", (req, res) => {
  res.send("user route");
});

// REGISTER
router.post("/register", (req, res) => {
  // Validating the data
  const { error, data } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = new User({
      username: "lishu",
      email: "lishu@gmail.com",
      password: "12",
    });
    user.save();
    return res.send("hi");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
