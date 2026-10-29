import { useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import type { Todo } from "../services/TodoAPI.types";

const TodosPage = () => {
	const [todos, setTodos] = useState<Todo[]>([
		{ id: 1, title: "Learn TypeScript", completed: true },
		{ id: 2, title: "Try React", completed: false },
	]);
	console.log(todos);

	const handleAddExampleTodo = () => {
		const newTodo: Todo = {
			id: Math.max(0, ...todos.map(todo => todo.id)) + 1,
			title: "A new (local) example todo",
			completed: false,
		}
		setTodos(prevTodos => [...prevTodos, newTodo]);
	}

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			<p>Here be form</p>

			<Button className="mb-3" onClick={handleAddExampleTodo}>Add example todo</Button>

			<ListGroup className="todolist">
				{todos.map(todo => (
					<ListGroup.Item
						className={todo.completed ? "todo done" : "todo"}
						key={todo.id}
					>
						<span className="todo-title">{todo.title}</span>
					</ListGroup.Item>
				))}
			</ListGroup>
		</>
	);
};

export default TodosPage;
