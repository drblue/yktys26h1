import { getTodo } from "./services/TodoAPI";

const showTodo = async () => {
	const todo = await getTodo(1);
	console.log("title:", todo.title);
	console.log("completed:", todo.completed);
}
showTodo();
