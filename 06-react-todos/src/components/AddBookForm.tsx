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
	const [isSubmitting, setIsSubmitting] = useState(false);
	const canSubmit = inputTitle.length > 0 && pages !== "";

	const handleSubmit = async (e: React.SubmitEvent) => {
		e.preventDefault();

		if (!canSubmit || isSubmitting) {
			return;
		}

		setIsSubmitting(true);

		// Tell the parent component that we want to create a new book
		const saved = await onAdd(inputTitle, pages);

		// Clear input (only if it was actually created)
		if (saved) {
			setInputTitle("");
			setPages("");
		}

		setIsSubmitting(false);
	}

	return (
		<Form className="mb-3" onSubmit={handleSubmit}>
			<InputGroup className="mb-3">
				<Form.Control
					aria-label="Book title"
					onChange={e => setInputTitle(e.target.value)}
					placeholder="Book title"
					value={inputTitle}
					disabled={isSubmitting}
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
					disabled={isSubmitting}
					required
				/>
				<Button
					disabled={!canSubmit || isSubmitting}
					type="submit"
					variant="success"
				>Create</Button>
			</InputGroup>
		</Form>
	)
}

export default AddBookForm;
