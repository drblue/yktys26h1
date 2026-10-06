import "./assets/scss/app.scss";

/**
 * DOM references
 */
const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!;
const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!;

/**
 * Type definitions
 */
interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

/**
 * Initial state
 */

// Get JSON of todos from localStorage
const jsonTodos = localStorage.getItem("todos") ?? "[]";

// Parse JSON into something that we can use in JavaScript
let todos: Todo[] = JSON.parse(jsonTodos);

/**
 * Save todos to localStorage
 */
const saveTodos = () => {
	// Get a JSON-representation of the todos-array
	const jsonTodos = JSON.stringify(todos);

	// Save JSON to localStorage
	localStorage.setItem("todos", jsonTodos);
}

/**
 * Listen for when the new todo form is being submitted
 */
newTodoFormEl.addEventListener("submit", (e) => {
	// 👮🏻‍♂️ Stop form from being submitted
	e.preventDefault();

	// 💇
	const newTodoTitle = newTodoTitleEl.value.trim();

	// 🚓
	if (newTodoTitle.length < 3) {
		alert("That's too short todo to do, better do it right away instead!");
		return;
	}

	// Find the highest ID among all todos
	/*
	let maxId = 0;
	todos.forEach(todo => {
		if (todo.id > maxId) {
			maxId = todo.id;
		}
	});
	*/
	/*
	const maxId = todos.reduce((maxId, todo) => {
		if (todo.id > maxId) {
			return todo.id;
		}
		return maxId;
	}, 0);
	*/
	const maxId = Math.max(0, ...todos.map(todo => todo.id));

	// 👶🏻 Create new todo object
	const newTodo: Todo = {
		id: maxId + 1,
		title: newTodoTitle,
		completed: false,
	}

	// 🫸🏻 PUSH!
	todos.push(newTodo);

	// Save todos 🏊‍♀️🛟
	saveTodos();

	// 🎨 Re-render todos
	renderTodos();

	// 🧹 Empty input field
	newTodoTitleEl.value = "";

	console.log("Great success!", todos);
});

/**
 * Render todos to DOM
 */
const renderTodos = () => {
	todosEl.innerHTML = todos
		.map(todo => {
			return `<li class="list-group-item d-flex justify-content-between align-items-center">
				<span class="todo-item">
					<input type="checkbox" class="me-2" ${todo.completed ? "checked" : ""} />
					<span class="todo-title">${todo.title}</span>
				</span>
				<span class="todo-actions">
					<button class="btn btn-warning">Edit</button>
					<button class="btn btn-danger">Delete</button>
				</span>
			</li>`;
		})
		.join("");
}

/**
 * Initialize app
 */
renderTodos();
