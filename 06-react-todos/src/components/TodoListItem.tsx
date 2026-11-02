import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import type { Todo } from "../services/TodoAPI.types";

interface TodoListItemProps {
	onToggle: (todo: Todo) => Promise<void>;
	todo: Todo;
}

const TodoListItem = ({ onToggle, todo }: TodoListItemProps) => {
	return (
		<ListGroup.Item
			className={todo.completed ? "todo done" : "todo"}
		>
			<span className="todo-title">{todo.title}</span>

			<div>
				<Button onClick={() => onToggle(todo)} size="sm" variant="warning">Toggle</Button>
			</div>
		</ListGroup.Item>
	)
}

export default TodoListItem;
