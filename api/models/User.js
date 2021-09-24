const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    posts: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);
userSchema.methods.generateAuthToken()=async function(){
    try {
        const token=jwt.sign({_id:this._id},"asdfghjklzxccvbmkiureshdhd");
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}
userSchema.pre("save", async function (next) {
  if (this.isModified("password") === true) {
    this.password = bcrypt.hash(this.password, 12);
  }
  next();
});

module.exports = mongoose.module("user", userSchema);
