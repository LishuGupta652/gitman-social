const router = require("express").Router();
const { registerValidation, loginValidation } = require("../validate");
const User = require("../models/user");

router.get("/", (req, res) => {
  res.send("inside user route");
});

// update user
// delete user
// get a user
// follow user
// unfollow user
module.exports = router;
