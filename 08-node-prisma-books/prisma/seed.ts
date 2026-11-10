import { prisma } from "../src/lib/prisma.ts";

try {
	// Keep existing rows when setup is run again.
	await prisma.book.upsert({
		where: { id: 1 },
		update: {},
		create: { id: 1, title: "Foundation", pages: 255 },
	});
	await prisma.book.upsert({
		where: { id: 2 },
		update: {},
		create: { id: 2, title: "Pride and Prejudice", pages: 279 },
	});
} finally {
	await prisma.$disconnect();
}
