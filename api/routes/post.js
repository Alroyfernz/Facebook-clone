const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
router.post("/post", async (req, res) => {
  try {
    const newPost = new Post({
      userId: req.body.userId,
      photo: req.body.photo,
      username: req.body.username,
      desc: req.body.desc,
    });

    const post = await newPost.save();
    const updatedUser = User.findByIdAndUpdate(req.userId, {
      $push: { posts: post._id },
    });
    await updatedUser.save();
  } catch (error) {
    console.log("error while creating new post");
  }
});

router.post("update/:id", async (req, res) => {
  try {
    const currentPost = Post.findById();
  } catch (error) {}
});
router.get("user/:userId", async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userId });
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).json("Error while fetching posts");
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send("error while fetching posts");
  }
});
