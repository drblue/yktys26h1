import express from "express";
import { getTodo, getTodos } from "../controllers/todos.controller.ts";

// Create a router
export const todosRouter = express.Router();


// Respond to GET /todos requests
todosRouter.get("/", getTodos);

// Respond to GET /todos/:id requests
todosRouter.get("/:id", getTodo);
