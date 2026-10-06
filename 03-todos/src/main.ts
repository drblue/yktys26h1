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
let todos: Todo[] = [
	{ id: 1, title: "🤓 Learn about TypeScript", completed: true },
	{ id: 2, title: "😇 Take over the world", completed: false },
	{ id: 3, title: "💰 Profit", completed: false },
];

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
