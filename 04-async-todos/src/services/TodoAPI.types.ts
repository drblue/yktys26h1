/**
 * Type-definitions for the TodoAPI service
 */

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export type CreateTodoPayload = Omit<Todo, "id">;
/*
export interface CreateTodoPayload {
	title: string;
	completed: boolean;
}
*/

export type UpdateTodoPayload = Partial<CreateTodoPayload>;
// export type UpdateTodoPayload = Partial<Omit<Todo, "id">>;  // also works, but this is less readable
/*
export interface UpdateTodoPayload {
	title?: string;
	completed?: boolean;
}
*/
