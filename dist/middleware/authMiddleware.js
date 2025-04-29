"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({ message: "Username and password are required" });
        return;
    }
    if (typeof username !== 'string' || typeof password !== 'string') {
        res.status(400).json({ message: "Invalid input types" });
        return;
    }
    if (username.trim().length === 0 || password.trim().length === 0) {
        res.status(400).json({ message: "Username and password cannot be empty" });
        return;
    }
    next();
};
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map