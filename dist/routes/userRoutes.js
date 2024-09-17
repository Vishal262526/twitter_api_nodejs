"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get("/:uid", userController_1.getUser); // Get single user
router.get("/", userController_1.getAllUsers); // Get List of users
router.put("/:uid", userController_1.updateUser); // Update a user by the uid
router.delete("/:uid", userController_1.deleteUser); // Delete a user by the uid
exports.default = router;
