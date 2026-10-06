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

/*
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
*/

// Type Aliases can be assigned to primitive types
type Tal = number;
let x: Tal = 42;
let y: number = 1337;

const sumNum = (a: number, b: number) => a + b;
sumNum(x, y);

// Type Aliases can also be a union between two (or more types)
type StringOrNumber = string | number;
let s: StringOrNumber;
s = 42;
s = "forty-two";
// s = false;

const makeMoreInteresting = (msg: StringOrNumber) => {
	/*
	if (typeof msg === "string") {
		return msg.toLocaleUpperCase() + "!!!!111";
	}

	return String(msg).toLocaleUpperCase() + "!!!!111";
	*/

	return (typeof msg === "string")
		? msg.toLocaleUpperCase() + "!!!!111"
		: String(msg).toLocaleUpperCase() + "!!!!111";
}
console.log(makeMoreInteresting("lolcats are funny"));
console.log(makeMoreInteresting(1337));

// Inheritance 💰
interface Animal {
	name: string;
}

interface Dog extends Animal {
	legs: number;
}

// Two (or more) interfaces with the same name is allowed and merges together
interface Dog extends Animal {
	wagsTail: boolean;
}

const doge: Dog = {
	name: "Doge",
	legs: 4,
	wagsTail: true,
}


type AnimalType = {
	name: string;
}

type DogType = AnimalType & {
	legs: number;
}

// nope! duplicate identifier
// type DogType = AnimalType & {
// 	wagsTail: boolean;
// }
