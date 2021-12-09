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
    res.status(200).json({ success: true, post: savedPost });
  } catch (error) {
    res.status(500).send({ error: "server Error accured" });
  }
});
// Update a post
// Delete a post
// Like a post
// Get a post
// Get timeline posts

module.exports = router;
