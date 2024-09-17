import { Router, Response, Request } from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/userController";
const router = Router();

router.get("/:uid", getUser); // Get single user
router.get("/", getAllUsers); // Get List of users
router.put("/:uid", updateUser); // Update a user by the uid
router.delete("/:uid", deleteUser); // Delete a user by the uid

export default router;
