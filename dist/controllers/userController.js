"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getAllUsers = exports.getUser = void 0;
// Get user
const getUser = (req, res) => {
    const { uid } = req.params;
    res.status(501).json({ error: `Get User Not Implemented  ${uid}` });
};
exports.getUser = getUser;
// List user
const getAllUsers = (req, res) => {
    res.status(501).json({ error: " Get All Users Not Implemented " });
};
exports.getAllUsers = getAllUsers;
// Update user
const updateUser = (req, res) => {
    res.status(501).json({ error: " Update User Not Implemented " });
};
exports.updateUser = updateUser;
// Delete user
const deleteUser = (req, res) => {
    res.status(501).json({ error: " Delete User Not Implemented " });
};
exports.deleteUser = deleteUser;
