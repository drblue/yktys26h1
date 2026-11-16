import express from "express";
import { createBook, deleteBook, getBooks, updateBook } from "../controllers/books.controller.ts";

export const booksRouter = express.Router();

// GET /books
booksRouter.get("/", getBooks);

// POST /books
booksRouter.post("/", createBook);

// PATCH /books/:id
booksRouter.patch("/:id", updateBook);

// DELETE /books/:id
booksRouter.delete("/:id", deleteBook);
