interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

const showTodo = async () => {
	const res = await fetch("http://localhost:3000/todos/1");

	if (!res.ok) {
		throw new Error("Could not fetch todo.");
	}

	const todo = await res.json() as Todo;

	console.log("title:", todo.title);
	console.log("completed:", todo.completed);
}
showTodo();
