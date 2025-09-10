const Todo = require("../models/Todo");

// Get all Todos
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({
            success: true,
            count: todos.length,
            data: todos
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

//  Get Todo by ID
exports.getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }
        res.status(200).json({ success: true, data: todo });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Add Todo
exports.addTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Validation
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and Description are required"
            });
        }

        const todo = new Todo({ title, description });
        const savedTodo = await todo.save();

        res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data: savedTodo
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// Update Todo
exports.updateTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        
        if (!title && !description) {
            return res.status(400).json({
                success: false,
                message: "At least one field (title or description) is required to update"
            });
        }

        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }

        res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            data: updatedTodo
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// Delete Todo
exports.deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }
        res.status(200).json({ success: true, message: "Todo deleted successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

//  Get Todos by Status
exports.getTodosByStatus = async (req, res) => {
    try {
        const { status } = req.params;

        if (!["pending", "completed"].includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid status. Use 'pending' or 'completed'"
            });
        }

        const todos = await Todo.find({ status });
        res.status(200).json({
            success: true,
            count: todos.length,
            data: todos
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

//  Update Todo Status
exports.updateTodoStatus = async (req, res) => {
    try {
        const { status } = req.body;

        
        if (!status) {
            return res.status(400).json({
                success: false,
                message: "Status is required"
            });
        }

        if (!["pending", "completed"].includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid status. Use 'pending' or 'completed'"
            });
        }

        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );

        if (!todo) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }

        res.status(200).json({
            success: true,
            message: "Status updated successfully",
            data: todo
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
