"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tweetController_1 = require("../controllers/tweetController");
const router = (0, express_1.Router)();
router.post("/", tweetController_1.createTweet); // Create new tweet
router.get("/:id", tweetController_1.getSingleTweet); // Get single Tweet
router.get("/", tweetController_1.getAllTweets); // Get List of Tweet
router.put("/:id", tweetController_1.updateTweet); // Update a Tweet by the id
router.delete("/:id", tweetController_1.deleteTweet); // Delete a Tweet by the uid
exports.default = router;
