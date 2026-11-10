import type { CreateTodoPayload, Todo } from "../types/Todo.types.ts";

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

// Find a single todo
export const getTodo = async (id: number): Promise<Todo | undefined> => {
	return todos.find(todo => todo.id === id);
}

// Create a new todo
export const createTodo = async (payload: CreateTodoPayload) => {
	// Calculate next id
	const id = Math.max(0, ...todos.map(todo => todo.id)) + 1;

	// Create the todo object
	const todo: Todo = { id, ...payload }

	// Add it to the array of todos
	todos.push(todo);

	// Return the todo object
	return todo;
}
