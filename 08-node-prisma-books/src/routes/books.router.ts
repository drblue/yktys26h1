import express from "express";
import { getBooks } from "../controllers/books.controller.ts";

export const booksRouter = express.Router();

// GET /books
booksRouter.get("/", getBooks);
