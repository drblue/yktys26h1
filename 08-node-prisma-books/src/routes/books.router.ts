import express from "express";
import { createBook, getBooks } from "../controllers/books.controller.ts";

export const booksRouter = express.Router();

// GET /books
booksRouter.get("/", getBooks);

// POST /books
booksRouter.post("/", createBook);
