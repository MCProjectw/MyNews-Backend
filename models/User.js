const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true},
});

userSchema.pre("save", async (next) => {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = async (enterPassword) => {
    return await bcrypt.compare(enterPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;