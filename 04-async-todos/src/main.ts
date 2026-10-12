import { createTodo, deleteTodo, getTodos } from "./services/TodoAPI";
import type { CreateTodoPayload, Todo } from "./services/TodoAPI.types";
import "./assets/scss/app.scss";

/**
 * DOM references
 */
const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!;
const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!;


/**
 * Initial state
 */

// Local copy containing all todos from the server
let todos: Todo[] = [];

/**
 * Get todos from API and render them
 */
const getAndRenderTodos = async () => {
	// Somehow get the todos from the server and update local copy
	todos = await getTodos();

	// Render todos
	renderTodos();
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
	await createTodo(payload);

	// 🎨 Re-render todos
	await getAndRenderTodos();

	// 🧹 Empty input field
	newTodoTitleEl.value = "";

	console.log("Great success!", todos);
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

	} else if (target.dataset.action === "edit") {
		// Edit that todo
		console.log("Edit that todo");

	} else if (target.dataset.action === "delete") {
		// Delete that todo
		console.log("Delete that todo");

		// Get closest li's todoId
		const todoId = Number(target.closest("li")!.dataset.todoId);

		// Delete todo
		await deleteTodo(todoId);

		// Get todos from API
		getAndRenderTodos();

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
