import express from 'express';
import connectDB from './config.js';
import UserModel from './models/user/userSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

// Connect MongoDB
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Secret key for JWT (in real projects, use .env file)
const JWT_SECRET = 'mySecretKey';

// 🏠 Test route
app.get('/', (req, res) => {
    res.send(new Date().toLocaleString());
});


// 🧩 Signup Route
app.post('/users', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if email already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ status: 400, message: 'Email already registered' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save new user
        const user = new UserModel({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).send({
            status: 201,
            message: 'User created successfully',
        });
    } catch (err) {
        res.status(500).send({ status: 500, message: err.message });
    }
});


// 🔐 Login Route
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).send({ status: 404, message: 'User not found' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ status: 401, message: 'Invalid password' });
        }

        // Generate token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Send token as cookie
        res.cookie('token', token, {
            httpOnly: true,      // not accessible by JS
            sameSite: 'strict',  // prevent CSRF
            maxAge: 3600000      // 1 hour
        });

        res.status(200).send({
            status: 200,
            message: 'Login successful',
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (err) {
        res.status(500).send({ status: 500, message: err.message });
    }
});


// 🧱 JWT Middleware
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).send({
            status: 401,
            message: 'Access denied. No token provided.'
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // attach user info
        next();
    } catch (error) {
        res.status(401).send({
            status: 401,
            message: 'Invalid or expired token'
        });
    }
};


// 👥 Get all users (Protected)
app.get('/users', verifyToken, async (req, res) => {
    const users = await UserModel.find();
    res.status(200).send({ status: 200, message: users });
});


// ❌ Delete user by ID (Protected)
app.delete('/users/:id', verifyToken, async (req, res) => {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(203).send({
        status: 203,
        message: 'User deleted'
    });
});


// ✏️ Update user (Protected)
app.patch('/users/:id', verifyToken, async (req, res) => {
    await UserModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send({
        status: 200,
        message: 'User updated'
    });
});


// 🚪 Logout Route
app.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).send({ status: 200, message: 'Logged out successfully' });
});


// 🚀 Start Server
app.listen(5000, () => {
    console.log('✅ Express server running on port 5000');
});
