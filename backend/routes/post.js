const router = require("express").Router();
const Post = require("../models/Post");

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
// Like a post
// Get a post
// Get timeline posts

module.exports = router;
