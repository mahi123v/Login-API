const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/UserRoutes'); // Ensure this path is correct

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());  // Ensure this middleware is used for parsing JSON bodies

// Routes
app.use('/api/users', userRoutes);  // Make sure you're using the imported userRoutes correctly

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
