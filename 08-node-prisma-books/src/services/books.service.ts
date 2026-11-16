import { prisma } from "../lib/prisma.ts"
import type { CreateBookPayload } from "../types/Book.types.ts";

const bookSelect = {
	id: true,
	title: true,
	pages: true,
}

export const getBooks = async () => {
	return await prisma.book.findMany({
		select: bookSelect,
	});
}

export const createBook = async (payload: CreateBookPayload) => {
	return await prisma.book.create({
		data: payload,
		select: bookSelect,
	});
}
