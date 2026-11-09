import express from "express";
import { createTodo, getTodo, getTodos } from "../controllers/todos.controller.ts";

// Create a router
export const todosRouter = express.Router();


// Respond to GET /todos requests
todosRouter.get("/", getTodos);

// Respond to GET /todos/:id requests
todosRouter.get("/:id", getTodo);

// Respond to POST /todos requests
todosRouter.post("/", createTodo);
