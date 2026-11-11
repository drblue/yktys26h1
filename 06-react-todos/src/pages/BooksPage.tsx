import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";
import { getBooks } from "../services/BooksAPI";
import type { Book } from "../services/BooksAPI.types";
import AddBookForm from "../components/AddBookForm";

const BooksPage = () => {
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [books, setBooks] = useState<Book[] | null>(null);

	const handleAddBook = (title: string, pages: string) => {
		console.log({ title, pagesText: pages });
	}

	useEffect(() => {
		let ignore = false;

		const loadBooks = async () => {
			// set loading to true
			setIsLoading(true);

			console.log("Loading books...");

			// Get books from API service
			const result = await getBooks();

			if (ignore) {
				return;
			}

			// Check result
			if (result.status === "success") {
				setBooks(result.data);
			} else {
				setError(result.message);
			}

			// set loading to false
			setIsLoading(false);
		}
		void loadBooks();

		return () => {
			ignore = true;
		}
	}, []);

	console.log("BooksPage is rendering...");

	return (
		<>
			<h1 className="mb-3">Books</h1>

			<AddBookForm onAdd={handleAddBook} />

			{isLoading && <p>Loading books...</p>}
			{error !== null && <Alert variant="danger">{error}</Alert>}

			{books && books.length > 0 && (
				<ListGroup className="mb-2" as="ul">
					{books.map(book => (
						<ListGroup.Item as="li" key={book.id}>
							<span>{book.title}</span> ({book.pages} pages)
						</ListGroup.Item>
					))}
				</ListGroup>
			)}

			{books && books.length === 0 && (
				<p>No books yet.</p>
			)}
		</>
	);
};

export default BooksPage;
