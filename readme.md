# 🧩 Simple REST API with Node.js, Express & TypeScript

This project is a basic RESTful API built using **Node.js**, **Express**, and **TypeScript**, allowing you to manage a simple collection of items stored in memory.

---

## 📦 Features

- ✅ GET /items — Get all items
- ✅ POST /items — Add a new item
- ✅ PUT /items/:id — Update an existing item
- ✅ DELETE /items/:id — Remove an item
- ✅ Error handling for invalid routes & requests
- ✅ JSON responses only (no HTML errors)

---

## 🛠️ Technologies

- Node.js
- Express
- TypeScript

---

## 📁 Project Structure

─src
├───data
├───middleware
├───models
└───routes

---

## Getting Started

```bash
git clone https://github.com/levski1914/In-Memory-API

npm install

npm run dev
```

Will start on http://localhost:3000

### Notes

- All data is stored in memory (resets on server restart).

- All endpoints return JSON only.

- Invalid routes return { "error": "Route not found" }.
