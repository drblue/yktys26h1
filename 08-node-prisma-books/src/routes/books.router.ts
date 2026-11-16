import express from "express";
import { createBook, deleteBook, getBook, getBooks, updateBook } from "../controllers/books.controller.ts";

export const booksRouter = express.Router();

// GET /books
booksRouter.get("/", getBooks);

// GET /book
booksRouter.get("/:id", getBook);

// POST /books
booksRouter.post("/", createBook);

// PATCH /books/:id
booksRouter.patch("/:id", updateBook);

// DELETE /books/:id
booksRouter.delete("/:id", deleteBook);
