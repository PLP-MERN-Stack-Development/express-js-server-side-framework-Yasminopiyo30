# Week 2 - Express.js RESTful API by Yasmin

## How to run
1. npm install
2. npm run dev   ← auto restart
3. Open http://localhost:3000

## API Endpoints
| Method | URL                          | Description                    |
|-------|------------------------------|--------------------------------|
| GET   | /                            | Hello World                    |
| GET   | /api/products                | List all (supports ?category=, ?search=, ?page=, ?limit=) |
| GET   | /api/products/:id            | Get one product                |
| POST  | /api/products                | Create (needs x-api-key header) |
| PUT   | /api/products/:id            | Update                         |
| DELETE| /api/products/:id            | Delete                         |

Header needed for POST/PUT/DELETE: