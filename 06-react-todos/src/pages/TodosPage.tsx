import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";
import TodoListItem from "../components/TodoListItem";
import type { Todo } from "../services/TodoAPI.types";
import AddTodoForm from "../components/AddTodoForm";
import TodoSummary from "../components/TodoSummary";
import { getTodos } from "../services/TodoAPI";

const TodosPage = () => {
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [todos, setTodos] = useState<Todo[] | null>(null);

	const handleAddTodo = (title: string) => {
		console.log("handleAddTodo invoked, title is:", title);
		const newTodo: Todo = {
			id: Math.max(0, ...(todos ?? []).map(todo => todo.id)) + 1,
			title,  // title: title
			completed: false,
		}
		setTodos(prevTodos => [...(prevTodos ?? []), newTodo]);
	}

	useEffect(() => {
		let ignore = false;

		const loadTodos = async () => {
			// set loading to true
			setIsLoading(true);

			console.log("Loading todos...");

			// Get todos from API service
			const result = await getTodos();

			if (ignore) {
				return;
			}

			// Check result
			if (result.status === "success") {
				setTodos(result.data);
			} else {
				setError(result.message);
			}

			// set loading to false
			setIsLoading(false);
		}
		void loadTodos();

		return () => {
			ignore = true;
		}
	}, []);

	console.log("TodosPage is rendering...");

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			<AddTodoForm onAdd={handleAddTodo} />

			{isLoading && <p>Loading todos...</p>}

			{error !== null && <Alert variant="danger">{error}</Alert>}

			{todos && todos.length > 0 && (
				<>
					<ListGroup className="todolist mb-2">
						{todos.map(todo => (
							<TodoListItem key={todo.id} todo={todo} />
						))}
					</ListGroup>

					<TodoSummary todos={todos} />
				</>
			)}

			{todos && todos.length === 0 && (
				<p>No todos to do, yayyyy!</p>
			)}
		</>
	);
};

export default TodosPage;
