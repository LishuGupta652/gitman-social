const router = require("express").Router();
const { registerValidation, loginValidation } = require("../validate");
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("inside user route");
});

// update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    // Check if user wanna update his password
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json({ error: err });
      }
    }

    // Details other than password
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json({ success: "Account has been updated" });
    } catch (err) {
      return res
        .status(403)
        .json({ error: "you can update only your account" });
    }
  } else {
    return res.status(403).json({ error: "you can update only your account" });
  }
});
// delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    // Check if user wanna update his password
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json({ error: err });
      }
    }

    // Details other than password
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json({ success: "Account has been updated" });
    } catch (err) {
      return res
        .status(403)
        .json({ error: "you can delete only your account" });
    }
  } else {
    return res.status(403).json({ error: "you can delete only your account" });
  }
});
// get a user
// follow user
// unfollow user
module.exports = router;
