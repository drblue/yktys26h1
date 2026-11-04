import type { Todo } from "../types/Todo.types.ts";

const todos: Todo[] = [
	{ id: 1, title: "Learn TypeScript", completed: true },
	{ id: 2, title: "Learn React", completed: true },
	{ id: 3, title: "Learn Node.js", completed: false },
];

// Get all todos
export const getTodos = async (): Promise<Todo[]> => {
	// Would make a request to the database (if we had any)
	return todos;
}
