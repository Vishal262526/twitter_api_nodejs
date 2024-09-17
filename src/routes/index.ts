import { Router } from "express";
import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import tweetRoutes from "./tweetRoutes";
const router = Router();

router.use("/api/auth", authRoutes);
router.use("/api/user", userRoutes);
router.use("/api/tweet", tweetRoutes);

export default router;
