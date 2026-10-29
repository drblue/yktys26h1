import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import type { Todo } from "../services/TodoAPI.types";

const TodosPage = () => {
	const [todos, setTodos] = useState<Todo[]>([
		{ id: 1, title: "Learn TypeScript", completed: true },
		{ id: 2, title: "Try React", completed: false },
	]);
	console.log(todos);

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			<p>Here be form</p>

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
