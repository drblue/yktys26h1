import { prisma } from "../lib/prisma.ts"
import type { CreateBookPayload } from "../types/Book.types.ts";

export const getBooks = async () => {
	return await prisma.book.findMany();
}

export const createBook = async (payload: CreateBookPayload) => {
	return await prisma.book.create({ data: payload });
}
