const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["membre", "entraineur"], default: "membre" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
