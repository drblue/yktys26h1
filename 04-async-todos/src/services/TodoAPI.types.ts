/**
 * Type-definitions for the TodoAPI service
 */

// Generic type that accepts a type-argument and uses it to type `data`
interface APISuccessResult<T> {
	status: "success";
	data: T;
}

interface APIErrorResult {
	status: "error";
	message: string;
}

// Union that takes in a type-argument and passes it along to APISuccessResult
export type APIResult<T> = APIErrorResult | APISuccessResult<T>;

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
