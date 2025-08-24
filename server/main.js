const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI ;


app.use(cors());
app.use(express.json()); 

// Connect to MongoDB.
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use the product routes.
app.use('/api/products', productRoutes);

// Simple root route for testing.
app.get('/', (req, res) => {
    res.send('E-commerce Product Management API is running!');
});

// Start the server.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});