const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    });

    const user = await newUser.save();
    const token = await User.generateAtuhToken();
    console.log(token);
    res.statusCode(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = user.findOne({ username: req.body.username });
    !user && res.status(500).json("no user found");
    const confirmedPassword = bcrypt.compare(user.password, req.body.password);
    !confirmedPassword && res.status(500).json("wrong password");
    if (user && confirmedPassword) res.status(200).send(user);
  } catch (error) {
    req.status(500).json(error);
  }
});

module.exports = router;
