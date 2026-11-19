import type { UpdateBookPayload } from "../types/Book.types.ts"

export const isUpdateBookPayload = (body: unknown): body is UpdateBookPayload => {
	return (
		typeof body === "object" && body !== null &&
		("title" in body || "pages" in body) &&
		(!("title" in body) || typeof body.title === "string") &&
		(!("pages" in body) || typeof body.pages === "number")
	)
}
