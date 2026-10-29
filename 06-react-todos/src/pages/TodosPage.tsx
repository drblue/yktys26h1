import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import TodoListItem from "../components/TodoListItem";
import type { Todo } from "../services/TodoAPI.types";

const TodosPage = () => {
	const [inputTitle, setInputTitle] = useState("");
	const [todos, setTodos] = useState<Todo[]>([
		{ id: 1, title: "Learn TypeScript", completed: true },
		{ id: 2, title: "Try React", completed: false },
	]);

	const handleSubmit = (e: React.SubmitEvent) => {
		e.preventDefault();
		console.log(`Will create todo with title '${inputTitle}'`);

		const newTodo: Todo = {
			id: Math.max(0, ...todos.map(todo => todo.id)) + 1,
			title: inputTitle,
			completed: false,
		}
		setTodos(prevTodos => [...prevTodos, newTodo]);
	}
	console.log("Rendering TodosPage...");

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			<Form className="mb-3" onSubmit={handleSubmit}>
				<InputGroup className="mb-3">
					<Form.Control
						aria-label="Todo title"
						onChange={e => setInputTitle(e.target.value)}
						minLength={2}
						placeholder="Buy glutenfree bread"
						value={inputTitle}
						required
					/>
					<Button
						type="submit"
						variant="success"
					>Create</Button>
				</InputGroup>
			</Form>

			<ListGroup className="todolist">
				{todos.map(todo => (
					<TodoListItem key={todo.id} todo={todo} />
				))}
			</ListGroup>
		</>
	);
};

export default TodosPage;
