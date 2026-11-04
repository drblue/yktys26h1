import type { Request, Response } from "express";
import * as todosService from "../services/todos.service.ts";

// Get all todos
export const getTodos = async (_req: Request, res: Response) => {
	const todos = await todosService.getTodos();
	res.json(todos);
}
