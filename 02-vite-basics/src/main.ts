/*
let myString = "Hello, YKTYS26H1!";
console.log(myString);

let myNumber: number;
myNumber = 1337;

let myBoolean: boolean;
myBoolean = true;
myBoolean = false;
myBoolean = null;
*/

// let myName: any = "Johan";
//      // ^?

/*
let myName;
//    ^?
myName = "Johan";
myName = 1337;
myName = null;
myName = [];
*/


const greet = (name: string, age?: number) => {
	if (age === undefined) {
		console.log(`Hello ${name.toLocaleUpperCase()}!`);
		return;
	}

	if (name.length < 2) {
		console.log("Y U HAS NO NAME?!");
		return;
	}

	console.log(`Hello ${name.toLocaleUpperCase()}! You are ${age.toFixed()} years old.`);
 //                                                         ^?
}
greet("Johan", 44);
greet("Script-kiddo", 13.37);
greet("Pelle");


/**
 * Arrays (implicit typing)
 */

const pets = ["cat", "dog", "hamster"];
// pets.push(42);  // nope, only accepts numbers
// console.log("Pets:", pets);
pets.forEach(pet => {
	console.log(pet.toLocaleUpperCase());
});

/*
const ages = [2, 4, 7, 3, 9];
//      ^?
ages.forEach(age => {
	console.log(age.toLocaleUpperCase());  // Property 'toLocaleUpperCase' does not exist on type 'number'.
});
*/


/**
 * Arrays (explicit typing)
 */

const names: string[] = [];
names.push("Alice");
// names.push(42);
// names.push(true);
console.log("names:", names);

const ages: number[] = [];
ages.push(13.37);
ages.push(42);
// ages.push("tretton37");
// ages.push("7");


/**
 * Custom Types
 */

/*
type User = {
	name: string,
	role: string,
	level: number,
}
interface User {
	name: string,
	role: string,
	level: number,
}

const johan: User = {
	name: "Johan",
	role: "Hacker",
	level: 1337,
}
*/

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

const todos: Todo[] = [
	{ id: 1, title: "Learn JavaScript", completed: true },
	{ id: 2, title: "Learn TypeScript", completed: true },
	{ id: 3, title: "Take over the world", completed: false },
];
