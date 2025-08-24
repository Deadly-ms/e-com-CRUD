const mongoose = require('mongoose');

// Define the schema for a product.
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true, // Removes whitespace from both ends of a string.
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Product description is required']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price cannot be negative']
    },
    stock: {
        type: Number,
        required: [true, 'Product stock is required'],
        min: [0, 'Stock cannot be negative']
    },
    imageURL: {
        type: String,
        default: 'https://placehold.co/600x400/E5E7EB/1F2937?text=No+Image'
    }
}, {
    timestamps: true // Adds `createdAt` and `updatedAt` timestamps.
});

// Create and export the Product model.
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;