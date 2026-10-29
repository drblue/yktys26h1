import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

interface AddTodoFormProps {
	onAdd: (title: string) => void;
}

const AddTodoForm = ({ onAdd }: AddTodoFormProps) => {
	const [inputTitle, setInputTitle] = useState("");
	const trimmedTitle = inputTitle.trim();

	const handleSubmit = (e: React.SubmitEvent) => {
		e.preventDefault();
		console.log(`Will create todo with title '${trimmedTitle}'`);

		if (trimmedTitle.length < 3) {
			return;
		}

		// 🙋 Tell parent component that we want to create a new todo
		onAdd(trimmedTitle);

		// Clear input field
		setInputTitle("");
	}

	return (
		<Form className="mb-3" onSubmit={handleSubmit}>
			<InputGroup className="mb-3">
				<Form.Control
					aria-label="Todo title"
					onChange={e => setInputTitle(e.target.value)}
					minLength={3}
					placeholder="Buy glutenfree bread"
					value={inputTitle}
					required
				/>
				<Button
					disabled={trimmedTitle.length < 3}
					type="submit"
					variant="success"
				>Create</Button>
			</InputGroup>
		</Form>
	)
}

export default AddTodoForm;
