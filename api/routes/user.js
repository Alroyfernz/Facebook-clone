const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      try {
        req.body.password = await bcrypt.hash(req.body.password, 12);
      } catch (error) {
        return res.status(500).json("error in hash");
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (error) {
      res.status(500).json("error while updating user");
    }
  } else {
    return res.status(403).json("you can only update your account");
  }
});

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      await User.deleteOne({ _id: req.params.id });
      res.status(200).json("Account has been deleted");
    } catch (error) {
      res.status(500).json("error while deleting user");
    }
  } else {
    return res.status(403).json("you can only delete your account");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
