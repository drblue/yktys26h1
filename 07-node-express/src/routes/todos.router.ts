import express from "express";
import type { Todo } from "../types/Todo.types.ts";

// Create a router
export const todosRouter = express.Router();

const todos: Todo[] = [
	{ id: 1, title: "Learn TypeScript", completed: true },
	{ id: 2, title: "Learn React", completed: true },
	{ id: 3, title: "Learn Node.js", completed: false },
];

// Respond to GET /todos requests
todosRouter.get("/", (_req, res) => {
	res.json(todos);
});
