import express from "express";
import { getTodos } from "../controllers/todos.controller.ts";

// Create a router
export const todosRouter = express.Router();


// Respond to GET /todos requests
todosRouter.get("/", getTodos);
