import ListGroup from "react-bootstrap/ListGroup";
import type { Todo } from "../services/TodoAPI.types";

interface TodoListItemProps {
	todo: Todo;
}

const TodoListItem = ({ todo }: TodoListItemProps) => {
	return (
		<ListGroup.Item
			// className={todo.completed ? "todo done" : "todo"}
		>
			<span className="todo-title">{todo.title}</span>
		</ListGroup.Item>
	)
}

export default TodoListItem;
