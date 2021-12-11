const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/user");
router.get("/", (req, res) => {
  console.log("Posts route");
});

// Create a post
router.post("/", async (req, res) => {
  const post = new Post(req.body);
  try {
    const savedPost = await post.save();
    res.status(200).send({ success: true, post: savedPost });
  } catch (error) {
    res.status(500).send({ error: "server Error accured" });
  }
});

// Update a post
router.put("/:id", async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    if (post.userId !== req.body.userId) {
      const updatedPost = await post.updateOne({ $set: req.body });
      return res
        .status(200)
        .send({ success: "post has been updated", post: updatedPost });
    } else {
      return res.status(500).send({ error: "You can not update other's post" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "server Error accured" });
  }
});

// Delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    if (post.userId !== req.body.userId) {
      const updatedPost = await post.deleteOne({ $set: req.body });
      return res
        .status(200)
        .send({ success: "post has been deleted", post: updatedPost });
    } else {
      return res.status(500).send({ error: "You can not delete other's post" });
    }
  } catch (error) {
    return res.status(500).send({ error: "server Error accured" });
  }
});

// Like a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(req.body.userId)) {
      const updatedPost = await post.updateOne({
        $push: { likes: req.body.userId },
      });
      return res
        .status(200)
        .send({ success: "post has been liked", post: updatedPost });
    } else {
      const updatedPost = await post.updateOne({
        $pull: { likes: req.body.userId },
      });
      return res
        .status(200)
        .send({ success: "post has been disliked", post: updatedPost });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "server Error accured" });
  }
});

// Get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).send({ success: "fetched", data: post });
  } catch (error) {
    return res.status(500).send({ error: "server Error accured" });
  }
});

// Get timeline posts
router.post("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPost = await Post.find({ userId: currentUser._id });
    const friendPost = await Promise.all(
      currentUser.following.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.json(userPost.concat(...friendPost));
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "server Error accured" });
  }
});

module.exports = router;
