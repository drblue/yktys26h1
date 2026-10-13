import { createTodo, deleteTodo, getTodos, updateTodo } from "./services/TodoAPI";
import type { CreateTodoPayload, Todo } from "./services/TodoAPI.types";
import "./assets/scss/app.scss";

/**
 * DOM references
 */
const loadingEl = document.querySelector<HTMLParagraphElement>("#loading")!;
const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!;
const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!;


/**
 * Initial state
 */

// Local copy containing all todos from the server
let todos: Todo[] = [];

/**
 * Error handler
 */
const handleError = (err: unknown) => {
	if (err instanceof Error) {
		alert("Something went wrong: " + err.message);
	} else {
		alert("Someone threw something that wasn't an Error. This is why we can't have nice things.");
	}
}

/**
 * Get todos from API and render them
 */
const getAndRenderTodos = async () => {
	loadingEl.hidden = false;

	try {
		// Somehow get the todos from the server and update local copy
		todos = await getTodos();

		// Render todos
		renderTodos();

	} catch (err) {
		handleError(err);

	} finally {
		// Hide loading
		loadingEl.hidden = true;
	}
}

/**
 * Listen for when the new todo form is being submitted
 */
newTodoFormEl.addEventListener("submit", async (e) => {
	// 👮🏻‍♂️ Stop form from being submitted
	e.preventDefault();

	// 💇
	const newTodoTitle = newTodoTitleEl.value.trim();

	// 🚓
	if (newTodoTitle.length < 3) {
		alert("That's too short todo to do, better do it right away instead!");
		return;
	}

	// Create the todo in the API (and wait for the request to be completed)
	const payload: CreateTodoPayload = {
		title: newTodoTitle,
		completed: false,
	}

	try {
		await createTodo(payload);

		// 🎨 Re-render todos
		await getAndRenderTodos();

		// 🧹 Empty input field
		newTodoTitleEl.value = "";

		console.log("Great success!", todos);

	} catch (err) {
		handleError(err);
	}
});

/**
 * Listen for clicks on the todos list
 */
todosEl.addEventListener("click", async (e) => {
	console.log("You clicked on:", e.target);

	// Get event target
	const target = e.target as HTMLElement;

	if (target.tagName === "INPUT") {
		// Toggle that todo
		console.log("Toggle that todo");

		// Get closest li's todoId
		const todoId = Number(target.closest("li")!.dataset.todoId);

		// Find the todo with that id
		const todo = todos.find(t => t.id === todoId);
		if (!todo) {
			return;
		}
		console.log("Found todo-object with that id:", todo);

		try {
			// Toggle todo
			await updateTodo(todoId, { completed: !todo.completed });

			// Get todos from API
			getAndRenderTodos();

		} catch (err) {
			handleError(err);
		}

	} else if (target.dataset.action === "edit") {
		// Edit that todo
		console.log("Edit that todo");

		// Get closest li's todoId
		const todoId = Number(target.closest("li")!.dataset.todoId);

		// Find the todo with that id
		const todo = todos.find(t => t.id === todoId);
		if (!todo) {
			return;
		}
		console.log("Found todo-object with that id:", todo);

		// Ask user what the new title should be
		const title = prompt("What's the new title?", todo.title);
		if (!title || title.length < 3) {
			// The user got cold feet 🦶🥶 or typed to few characters
			return;
		}

		try {
			// Update todo title in the API
			await updateTodo(todoId, { title });

			// Get todos from API
			getAndRenderTodos();

		} catch (err) {
			handleError(err);
		}

	} else if (target.dataset.action === "delete") {
		// Delete that todo
		console.log("Delete that todo");

		// Get closest li's todoId
		const todoId = Number(target.closest("li")!.dataset.todoId);

		try {
			// Delete todo
			await deleteTodo(todoId);

			// Get todos from API
			getAndRenderTodos();

		} catch (err) {
			handleError(err);
		}
	}
});

/**
 * Render todos to DOM
 */
const renderTodos = () => {
	todosEl.innerHTML = todos
		.map(todo => {
			return `<li class="list-group-item d-flex justify-content-between align-items-center" data-todo-id="${todo.id}">
				<span class="todo-item">
					<input type="checkbox" class="me-2" ${todo.completed ? "checked" : ""} />
					<span class="todo-title">${todo.title}</span>
				</span>
				<span class="todo-actions">
					<button class="btn btn-warning" data-action="edit">Edit</button>
					<button class="btn btn-danger" data-action="delete">Delete</button>
				</span>
			</li>`;
		})
		.join("");
}

/**
 * Initialize app
 */
getAndRenderTodos();
