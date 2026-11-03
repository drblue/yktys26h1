import express from "express";
import { todosRouter } from "./routes/todos.router.ts";

const PORT = Number(process.env.PORT ?? 3001);
const app = express();

// Respond to GET / requests
app.get("/", (_req, res) => {
	res.json({ message: "Hello from Express!" });
});

// Use the todos router
app.use("/todos", todosRouter);

// Listen for incoming requests
app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
