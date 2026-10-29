import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import TodoListItem from "../components/TodoListItem";
import type { Todo } from "../services/TodoAPI.types";
import AddTodoForm from "../components/AddTodoForm";

const TodosPage = () => {
	const [todos, setTodos] = useState<Todo[]>([
		{ id: 1, title: "Learn TypeScript", completed: true },
		{ id: 2, title: "Try React", completed: false },
	]);

	const handleAddTodo = (title: string) => {
		console.log("handleAddTodo invoked, title is:", title);
		const newTodo: Todo = {
			id: Math.max(0, ...todos.map(todo => todo.id)) + 1,
			title,  // title: title
			completed: false,
		}
		setTodos(prevTodos => [...prevTodos, newTodo]);
	}

	console.log("Rendering TodosPage...");

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			<AddTodoForm onAdd={handleAddTodo} />

			<ListGroup className="todolist">
				{todos.map(todo => (
					<TodoListItem key={todo.id} todo={todo} />
				))}
			</ListGroup>
		</>
	);
};

export default TodosPage;
