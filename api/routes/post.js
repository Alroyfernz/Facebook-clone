const router = require("express").Router();
const { findByIdAndUpdate } = require("../models/Post");
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
    const currentPost = await findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    const newUpdatedPost = await currentPost.save();
    res.status(200).send(newUpdatedPost);
  } catch (error) {
    res.status(500).json("error while updating");
  }
});

router.delete("delete/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json("post deleted");
  } catch (error) {
    res.status(500).json("post deletion error");
  }
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
