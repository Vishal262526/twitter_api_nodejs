"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRoutes_1 = __importDefault(require("./authRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const tweetRoutes_1 = __importDefault(require("./tweetRoutes"));
const router = (0, express_1.Router)();
router.use("/api/auth", authRoutes_1.default);
router.use("/api/user", userRoutes_1.default);
router.use("/api/tweet", tweetRoutes_1.default);
exports.default = router;
