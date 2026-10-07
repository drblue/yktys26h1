import axios from "axios";

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export const getTodo = async (id: number) => {
	const res = await axios.get<Todo>("http://localhost:3000/todos/" + id);
	return res.data;
}
