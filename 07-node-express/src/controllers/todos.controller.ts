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
