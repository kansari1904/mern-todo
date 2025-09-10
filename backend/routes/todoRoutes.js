const express = require("express");
const router = express.Router();
const {
    getTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo,
    getTodosByStatus,
    updateTodoStatus,
} = require("../controllers/todoController");

// CRUD APIs
router.get("/get", getTodos);
router.get("/get/:id", getTodoById);
router.post("/add", addTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

// Status APIs
router.get("/status/:status", getTodosByStatus);
router.put("/update-status/:id", updateTodoStatus);

module.exports = router;
