// data.js
const { v4: uuidv4 } = require('uuid');

let products = [
  { id: uuidv4(), name: "Wireless Earbuds", description: "Noise cancelling", price: 4500, category: "Electronics", inStock: true },
  { id: uuidv4(), name: "Phone Case", description: "iPhone 15 Pro", price: 800, category: "Accessories", inStock: true },
  { id: uuidv4(), name: "Laptop Stand", description: "Aluminum", price: 3500, category: "Accessories", inStock: false },
  { id: uuidv4(), name: "USB-C Hub", description: "7 in 1", price: 5200, category: "Electronics", inStock: true }
];

module.exports = products;