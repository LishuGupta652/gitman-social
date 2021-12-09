const router = require("express").Router();
const { registerValidation, loginValidation } = require("../validate");
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("inside user route");
});

// update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
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
      if (!user) return res.status(400).send({ error: "No such user found" });

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
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    // Details other than password
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) return res.status(400).send({ error: "No such user found" });

      res
        .status(200)
        .json({ success: "Account has been deleted Successfully" });
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
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(400).json({ error: "No such user found" });

    const { password, ...otherData } = user._doc;
    res.status(200).json(otherData);
  } catch (error) {
    res.status(500).json({ error: "ERROR ACCURED" });
  }
});
// follow user
router.put("/:id/follow", async (req, res) => {
  // Checking if user are same or different
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        return res.status(200).json(`User ${user.username} has been followed`);
      } else {
        res.status(403).json("You already follow this user");
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    res.status(403).json({ error: "You can not follow yourself" });
  }
});
// unfollow user
router.put("/:id/unfollow", async (req, res) => {
  // Checking if user are same or different
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        return res
          .status(200)
          .json(`User ${user.username} has been un followed`);
      } else {
        res.status(403).json("You already un follow this user");
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    res.status(403).json({ error: "You can not un follow yourself" });
  }
});

module.exports = router;
