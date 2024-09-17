"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTweet = exports.updateTweet = exports.getAllTweets = exports.getSingleTweet = exports.createTweet = void 0;
// Create new Tweet
const createTweet = (req, res) => {
    res.status(501).json({ error: "Create Tweet Not Implemented " });
};
exports.createTweet = createTweet;
// Get single Tweet
const getSingleTweet = (req, res) => {
    const { id } = req.params;
    res.status(501).json({ error: `Get Single Tweet Not Implemented  ${id}` });
};
exports.getSingleTweet = getSingleTweet;
// List user
const getAllTweets = (req, res) => {
    res.status(501).json({ error: " Get All Tweets Not Implemented " });
};
exports.getAllTweets = getAllTweets;
// Update user
const updateTweet = (req, res) => {
    const { id } = req.params;
    res.status(501).json({ error: `Update Tweet Not Implemented  ${id}` });
};
exports.updateTweet = updateTweet;
// Delete user
const deleteTweet = (req, res) => {
    const { id } = req.params;
    res.status(501).json({ error: `Delete Tweet Not Implemented  ${id}` });
};
exports.deleteTweet = deleteTweet;
