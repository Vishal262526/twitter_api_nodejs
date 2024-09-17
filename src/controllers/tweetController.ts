import { Request, Response } from "express";

// Create new Tweet
export const createTweet = (req: Request, res: Response) => {
  res.status(501).json({ error: "Create Tweet Not Implemented " });
};

// Get single Tweet
export const getSingleTweet = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(501).json({ error: `Get Single Tweet Not Implemented  ${id}` });
};

// List user
export const getAllTweets = (req: Request, res: Response) => {
  res.status(501).json({ error: " Get All Tweets Not Implemented " });
};

// Update user
export const updateTweet = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(501).json({ error: `Update Tweet Not Implemented  ${id}` });
};

// Delete user
export const deleteTweet = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(501).json({ error: `Delete Tweet Not Implemented  ${id}` });
};
