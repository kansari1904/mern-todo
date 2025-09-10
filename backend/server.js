const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
connectDB();


// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
