import type { Request, Response } from "express";
import * as booksService from "../services/books.service.ts";
import type { CreateBookPayload } from "../types/Book.types.ts";

const isCreateBookPayload = (body: unknown): body is CreateBookPayload => {
	return (
		typeof body === "object" && body !== null &&
		"title" in body && typeof body.title === "string" &&
		"pages" in body && typeof body.pages === "number"
	)
}

export const getBooks = async (_req: Request, res: Response) => {
	// Call books-service and ask for all books
	const books = await booksService.getBooks();

	// Respond to the incoming request
	res.json(books);
}

export const createBook = async (req: Request, res: Response) => {
	const body: unknown = req.body;

	if (!isCreateBookPayload(body)) {
		res.status(400).json({ message: "Expected a title and a page count." });
		return;
	}

	const title = body.title.trim();
	const pages = body.pages;

	if (title.length === 0) {
		res.status(400).json({ message: "Title must not be empty." });
		return;
	}

	if (!Number.isInteger(pages) || pages < 1) {
		res.status(400).json({ message: "Pages must be a positive integer." });
		return;
	}

	const book = await booksService.createBook({ title, pages });
	res.status(201).json(book);
}
