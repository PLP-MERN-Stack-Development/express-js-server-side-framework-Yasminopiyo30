// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Yasmin\'s Products API - Week 2 PLP',
      version: '1.0.0',
      description: 'A beautiful, fully documented RESTful API with CRUD, auth, pagination & search',
      contact: {
        name: 'Yasmin',
        email: 'yasminopiyo30@gmail.com'
      }
    },
    servers: [
      { url: 'http://localhost:3000' }
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'x-api-key'
        }
      }
    },
    security: [{ ApiKeyAuth: [] }]
  },
  apis: ['./routes/product.js', './server.js']
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customCss: '.swagger-ui .topbar { background-color: #00A86B; }', // Kenyan green
    customSiteTitle: "Yasmin's Week 2 API",
    customfavIcon: "https://flagcdn.com/ke.svg"
  }));

  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log('Swagger docs available at http://localhost:3000/api-docs');
};

module.exports = swaggerDocs;