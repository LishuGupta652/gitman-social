const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { registerValidation, loginValidation } = require("../validate");
const User = require("../models/user");

router.get("/", (req, res) => {
  res.send("auth route");
});

// REGISTER
router.post("/register", async (req, res) => {
  // Validating the data
  const { error, value } = registerValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  // Checking if the email already exists in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(400).send({ error: "Email Already exists" });

  try {
    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save the user
    const user = await newUser.save();
    const { password, updatedAt, ...userSend } = user._doc;
    res.status(200).send(userSend);
  } catch (err) {
    res.status(400).send({ error: "Server Error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  // validate the data
  const { error, value } = loginValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  try {
    // Check if email does not exsits
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(400)
        .send({ error: "Email does not exists. Please Sign up." });

    // Validate bcrypt password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json({ error: "Password Invalid" });

    const { password, ...userData } = user._doc;

    // Signining json Webtoken
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    return res.header("auth-token", token).status(200).send(token);
    // return res.status(200).send(userData);
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: "Server Error" });
  }
});

module.exports = router;
