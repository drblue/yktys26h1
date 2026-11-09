import type { Request, Response } from "express";
import * as todosService from "../services/todos.service.ts";

// Get all todos
export const getTodos = async (_req: Request, res: Response) => {
	const todos = await todosService.getTodos();
	res.json(todos);
}

// Get a single todo
export const getTodo = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const todo = await todosService.getTodo(id);

	if (!todo) {
		res.status(404).json({ message: "Todo not found." });
		return;
	}

	res.json(todo);
}

// Create a new todo
export const createTodo = async (req: Request, res: Response) => {
	console.log("todos-controller createTodo");
	console.log("body:", req.body);

	const body: unknown = req.body;

	// Check that incoming data is valid
	if (
		typeof body !== "object" || body === null ||
		!("title" in body) || typeof body.title !== "string" ||
		!("completed" in body) || typeof body.completed !== "boolean"
	) {
		res.status(400).json({ message: "Expected a title and a completed flag." });
		return;
	}

	// Now we know that `body` has `title: string` and `completed: boolean`

	// Check if title is at least 3 characters long
	const title = body.title.trim();
	if (title.length < 3) {
		res.status(400).json({ message: "Title must have at least 3 characters." });
		return;
	}

	// Ask service to create a new todo using the validated data
	const todo = await todosService.createTodo({ title: title, completed: body.completed });

	// Respond with the newly created todo
	res.status(201).json(todo);
}
