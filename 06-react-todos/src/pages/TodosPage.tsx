import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";
import TodoListItem from "../components/TodoListItem";
import { createTodo, getTodos, updateTodo } from "../services/TodoAPI";
import type { Todo } from "../services/TodoAPI.types";
import AddTodoForm from "../components/AddTodoForm";
import TodoSummary from "../components/TodoSummary";
import ErrorAlert from "../components/ErrorAlert";

const TodosPage = () => {
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [todos, setTodos] = useState<Todo[] | null>(null);

	const handleAddTodo = async (title: string) => {
		// reset error-state
		setError(null);

		// Create todo using API service
		const result = await createTodo({
			title,
			completed: false,
		});

		// If error, set error message and return
		if (result.status === "error") {
			setError(result.message);
			return;
		}

		// If success, update todos-state with the new todo
		setTodos(prevTodos => [...(prevTodos ?? []), result.data]);
	}

	const handleToggleTodo = async (todo: Todo) => {
		// reset error-state
		setError(null);

		// Update todo using API service
		const result = await updateTodo(todo.id, {
			completed: !todo.completed,
		});

		// If error, set error message and return
		if (result.status === "error") {
			setError(result.message);
			return;
		}

		// If success, update todos-state and replace the old todo with the updated version
		setTodos(prevTodos => (prevTodos ?? []).map(item =>
			item.id === result.data.id   // 2 === 2
				? result.data
				: item
		));
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

			<ErrorAlert>
				<p>This is an error</p>
			</ErrorAlert>

			<ErrorAlert>
				<p>This is another error!!</p>
			</ErrorAlert>

			<ErrorAlert>
				<h2>OMG YET ANOTHER ERROR; wh000t?!</h2>
				<img src="https://media.tenor.com/U5hmONvZGo8AAAAM/mmt-error-error.gif" className="img-fluid" />
			</ErrorAlert>

			<AddTodoForm onAdd={handleAddTodo} />

			{isLoading && <p>Loading todos...</p>}

			{error !== null && <Alert variant="danger">{error}</Alert>}

			{todos && todos.length > 0 && (
				<>
					<ListGroup className="todolist mb-2">
						{todos.map(todo => (
							<TodoListItem key={todo.id} onToggle={handleToggleTodo} todo={todo} />
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
