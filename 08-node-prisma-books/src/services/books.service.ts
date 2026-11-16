import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { prisma } from "../lib/prisma.ts"
import type { CreateBookPayload, UpdateBookPayload } from "../types/Book.types.ts";

const isRecordNotFound = (err: unknown) => {
	return (
		err instanceof PrismaClientKnownRequestError &&
		err.code === "P2025"
	);
}

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

export const updateBook = async (id: number, payload: UpdateBookPayload) => {
	try {
		return await prisma.book.update({
			where: { id },
			data: payload,
		});
	} catch (err) {
		if (isRecordNotFound(err)) {
			return null;
		}

		throw err;
	}
}
