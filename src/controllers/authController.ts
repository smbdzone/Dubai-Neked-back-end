import { Request, Response } from "express";
import User from "../models/userModel";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken";

export const signup = async (req: Request, res: Response): Promise<void> => {
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
    const userExists = await User.findOne({ username });
    if (userExists) {
      res.status(400).json({ message: "Username already exists" });
      return;
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json({ 
      message: "User registered successfully"
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    // Find user
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    // Generate token
    const token = generateToken(user._id.toString());

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: "Server error" });
  }
};
