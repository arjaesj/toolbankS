const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    index: true,
    unique: true,
    minlength: 2,
    maxlength: 20,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."],
  },
  fullName: String,
  address: String,
  imageUrl: String
});

UserSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  } else {
    bcrypt.hash(user.password, 10, (error, encrypted) => {
      if (error) return next(error);
      user.password = encrypted;
      return next();
    });
  }
});

UserSchema.methods.login = function(password) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (error) => {
      if (error) reject(error);
      console.log("Password authenticated!");
      resolve(user);
    });
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
