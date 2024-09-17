import { Router } from "express";

import {
  createTweet,
  deleteTweet,
  getAllTweets,
  getSingleTweet,
  updateTweet,
} from "../controllers/tweetController";
const router = Router();

router.post("/", createTweet); // Create new tweet
router.get("/:id", getSingleTweet); // Get single Tweet
router.get("/", getAllTweets); // Get List of Tweet
router.put("/:id", updateTweet); // Update a Tweet by the id
router.delete("/:id", deleteTweet); // Delete a Tweet by the uid

export default router;
