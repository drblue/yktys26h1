import { prisma } from "../lib/prisma.ts"

export const getBooks = async () => {
	return await prisma.book.findMany();
}
