export interface Book {
	id: number;
	title: string;
	pages: number;
}

export type CreateBookPayload = Pick<Book, "title" | "pages">;
