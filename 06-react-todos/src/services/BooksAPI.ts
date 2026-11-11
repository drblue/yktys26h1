/**
 * All communication with the backend REST-API (Express)
 */

import { get, post } from "./http";
import type { Book, CreateBookPayload } from "./BooksAPI.types";

/**
 * Get books from API using axios
 */
export const getBooks = async () => {
	return get<Book[]>("/books");
}

/**
 * Create book in API using axios
 */
export const createBook = async (payload: CreateBookPayload) => {
	return post<Book>("/books", payload);
}
