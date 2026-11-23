import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

interface AddBookFormProps {
	onAdd: (title: string, pages: string) => Promise<boolean>;
}

const AddBookForm = ({ onAdd }: AddBookFormProps) => {
	const [inputTitle, setInputTitle] = useState("");
	const [pages, setPages] = useState("");
	const canSubmit = inputTitle.length > 0 && pages !== "";

	const handleSubmit = async (e: React.SubmitEvent) => {
		e.preventDefault();

		if (!canSubmit) {
			return;
		}

		// Tell the parent component that we want to create a new book
		const saved = await onAdd(inputTitle, pages);

		// Clear input (only if it was actually created)
		if (saved) {
			setInputTitle("");
			setPages("");
		}
	}

	return (
		<Form className="mb-3" onSubmit={handleSubmit}>
			<InputGroup className="mb-3">
				<Form.Control
					aria-label="Book title"
					onChange={e => setInputTitle(e.target.value)}
					placeholder="Book title"
					value={inputTitle}
					required
				/>
				<InputGroup.Text>{inputTitle.length} chars</InputGroup.Text>
				<Form.Control
					aria-label="Pages"
					type="number"
					step="any"
					onChange={e => setPages(e.target.value)}
					placeholder="Pages"
					value={pages}
					required
				/>
				<Button
					disabled={!canSubmit}
					type="submit"
					variant="success"
				>Create</Button>
			</InputGroup>
		</Form>
	)
}

export default AddBookForm;
