const express = require('express');
const productsRouter = require('./routes/product');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./utils/errorHandler');
const swaggerDocs = require('./swagger'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Swagger
swaggerDocs(app); 


// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: "Hello World! Yasmin's Products API is LIVE!",
    docs: "http://localhost:3000/api-docs"
  });
});

// Apply auth only to the products API so root and docs remain public
app.use('/api/products', auth, productsRouter);

// 404 & Error handler
app.use('*', (req, res) => res.status(404).json({ error: "Route not found" }));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});