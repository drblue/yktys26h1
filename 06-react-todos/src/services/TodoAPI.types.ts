/**
 * Type-definitions for the TodoAPI service
 */

export type { APIErrorResult, APIResult, APISuccessResult } from "./http";

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export type CreateTodoPayload = Omit<Todo, "id">;
export type UpdateTodoPayload = Partial<CreateTodoPayload>;
