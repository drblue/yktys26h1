import type { Book } from "../generated/prisma/client.ts";

export type CreateBookPayload = Pick<Book, "title" | "pages">;
