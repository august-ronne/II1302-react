const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Create Schema
 */
const PostSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Post = mongoose.model("post", PostSchema);
