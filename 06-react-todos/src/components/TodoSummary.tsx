import type { Todo } from "../services/TodoAPI.types";

interface TodoSummaryProps {
	todos: Todo[];
}

const TodoSummary = ({ todos }: TodoSummaryProps) => {
	const completed = todos.filter(todo => todo.completed).length;
	const remaining = todos.length - completed;

	return (
		<p>Total: {todos.length} &middot; Done: {completed} &middot; Remaining: {remaining}</p>
	)
}

export default TodoSummary;
