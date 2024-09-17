import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  res.status(501).json({ error: "Login Not Implemented" });
};

export const signup = (req: Request, res: Response) => {
  res.status(501).json({ error: " SignUp Not Implemented" });
};
