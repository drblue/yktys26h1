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
