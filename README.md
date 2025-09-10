# MERN ToDo App Backend

This is the backend API for a ToDo application built with Node.js, Express, and MongoDB (Mongoose).
It provides REST APIs to manage todos with full CRUD operations and status updates.

# Features
Add new todos with title & description

Update todo details

Delete todos

Get all todos or a single todo by ID

Filter todos by status (pending / completed)

Update status of a todo

Input validation & clear error messages

Standardized JSON responses

#  Project Structure

├── models/
│ └── Todo.js 
├── controllers/
│ └── todoController.js 
├── routes/
│ └── todoRoutes.js 
├── server.js 
├── package.json
└── README.md

# Installation & Setup

## Clone Repo
git clone https://github.com/kansari1904/mern-todo.git
cd backend

## Install Dependencies
npm install

## Environment Variables
.env

PORT=5000
MONGO_URI=mongodb://localhost:27017/todoapp

## Start Server

npm run dev   # with nodemon

# or
node server.js

# API Endpoints
Base URL: http://localhost:5000/api/todos

1. POST /add
2. GET /get
3. GET /get/:id
4. PUT /update/:id
5. DELETE /delete/:id
6. GET /status/:status
7. PUT /update-status/:id

# Dependencies

express – Web framework

mongoose – MongoDB ODM

cors – Enable CORS

dotenv – Environment variables

nodemon – Dev server auto-restart











