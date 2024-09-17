"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = exports.login = void 0;
const login = (req, res) => {
    res.status(501).json({ error: "Login Not Implemented" });
};
exports.login = login;
const signup = (req, res) => {
    res.status(501).json({ error: " SignUp Not Implemented" });
};
exports.signup = signup;
