import express from "express";

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

const PORT = Number(process.env.PORT ?? 3001);
const app = express();

// Respond to GET / requests
app.get("/", (_req, res) => {
	res.json({ message: "Hello from Express!" });
});

const todos: Todo[] = [
	{ id: 1, title: "Learn TypeScript", completed: true },
	{ id: 2, title: "Learn React", completed: true },
	{ id: 3, title: "Learn Node.js", completed: false },
];

// Respond to GET /todos requests
app.get("/todos", (_req, res) => {
	res.json(todos);
});

// Listen for incoming requests
app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
