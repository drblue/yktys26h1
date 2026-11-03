import express from "express";

const PORT = Number(process.env.PORT ?? 3001);
const app = express();

// Respond to GET / requests
app.get("/", (_req, res) => {
	res.json({ message: "Hello from Express!" });
});

// Listen for incoming requests
app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
