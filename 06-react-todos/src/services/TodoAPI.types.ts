/**
 * Type-definitions for the TodoAPI service
 */

// Generic type that accepts a type-argument and uses it to type `data`
export interface APISuccessResult<T> {
	status: "success";
	data: T;
}

export interface APIErrorResult {
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
export type UpdateTodoPayload = Partial<CreateTodoPayload>;
