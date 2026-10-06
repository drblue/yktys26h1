/**
 * The many ways of using TypeScript when querying the DOM 😄.
 */

const headingEl = document.querySelector("h3");
//       ^?
console.log("headingEl:", headingEl);
console.log("headingEl content:", headingEl?.textContent);

// I promise that this element exists 🤞🏻
const paragraphEl = document.querySelector("p")!;
//        ^?
// console.log("Paragraph content:", paragraphEl.textContent);  // will throw runtime error as paragraphEl actually is null, even though we promised TypeScript it isn't!

// 🤩
const subHeadingEl = document.querySelector("h2");
//       ^?
if (!subHeadingEl) {
	throw new Error("I can't do stuff without my h2!");
}
console.log("subHeadingEl content:", subHeadingEl.textContent);

// 😊
const inputTodoTitleEl = document.querySelector("#new-todo-title") as HTMLInputElement;  // watch out, we promise that it's HTMLInputElement and **NEVER** null!
//         ^?
console.log("input value:", inputTodoTitleEl.value);

// 🤓
const inputTodoTitleEl2 = document.querySelector<HTMLInputElement>("#new-todo-title");
//       ^?
