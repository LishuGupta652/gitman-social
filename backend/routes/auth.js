const router = require("express").Router();

const { registerValidation, loginValidation } = require("../validate");
const User = require("../models/user");

router.get("/", (req, res) => {
  res.send("auth route");
});

// REGISTER
router.post("/register", async (req, res) => {
  console.log(req.body);
  //   // Validating the data
  //   const { error, data } = registerValidation(req.body);
  //   if (error) return res.status(400).send(error.details[0].message);
  //   console.log(error, data);

  //   const userUser = new User({
  //     username: req.body.username,
  //     email: req.body.email,
  //     password: req.body.password,
  //   });

  //   try {
  //     const user = await newUser.save();
  //     res.status(200).send(user);
  //   } catch (err) {
  //     console.log(err);
  //   }
});

module.exports = router;
