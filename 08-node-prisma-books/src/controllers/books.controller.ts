import type { Request, Response } from "express";
import * as booksService from "../services/books.service.ts";

export const getBooks = async (_req: Request, res: Response) => {
	// Call books-service and ask for all books
	const books = await booksService.getBooks();

	// Respond to the incoming request
	res.json(books);
}
