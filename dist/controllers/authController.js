"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generateToken_1 = __importDefault(require("../utils/generateToken"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        // Validate required fields
        if (!username || !email || !password) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        // Validate field types
        if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
            res.status(400).json({ message: "Invalid input types" });
            return;
        }
        // Validate field lengths
        if (username.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0) {
            res.status(400).json({ message: "Fields cannot be empty" });
            return;
        }
        // Check if user exists
        const userExists = yield userModel_1.default.findOne({ username });
        if (userExists) {
            res.status(400).json({ message: "Username already exists" });
            return;
        }
        const emailExists = yield userModel_1.default.findOne({ email });
        if (emailExists) {
            res.status(400).json({ message: "Email already exists" });
            return;
        }
        // Hash password
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
        // Create user
        yield userModel_1.default.create({
            username,
            email,
            password: hashedPassword
        });
        res.status(201).json({
            message: "User registered successfully"
        });
    }
    catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        // Find user
        const user = yield userModel_1.default.findOne({ username });
        if (!user) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        // Check password
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        // Generate token
        const token = (0, generateToken_1.default)(user._id.toString());
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: "Server error" });
    }
});
exports.login = login;
//# sourceMappingURL=authController.js.map