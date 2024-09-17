import { Request, Response } from "express";

// Get user
export const getUser = (req: Request, res: Response) => {
  const { uid } = req.params;

  res.status(501).json({ error: `Get User Not Implemented  ${uid}` });
};

// List user
export const getAllUsers = (req: Request, res: Response) => {
  res.status(501).json({ error: " Get All Users Not Implemented " });
};

// Update user
export const updateUser = (req: Request, res: Response) => {
  res.status(501).json({ error: " Update User Not Implemented " });
};

// Delete user
export const deleteUser = (req: Request, res: Response) => {
  res.status(501).json({ error: " Delete User Not Implemented " });
};
