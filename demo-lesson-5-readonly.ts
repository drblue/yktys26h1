/**
 * TypeScript Playground
 * Readonly
 *
 * <https://www.typescriptlang.org/play/?#code/PQKhCgAIUgVBPADgUwMoGMBOBLRAXSABQBsBDeAc0wHsBXAOwBMoYAlZUx6+4+F4cOGz08yTADNS6ZHGpdIAb3ABIbIwBckerQC2AIzEBuFXmx5iyTQGc8OehWPL01HYguiNkPdWoXS9YwBfQWd6G0g8OWpNWCjIAF5FFTVNAEYAGhMzC00AIgARbgByAnQAC38KGTwymTVINwAvXMynFzdkD01JYitkTODIrgA6esSAJkNISGBgSEBeDcBmPcEhETFJaUgAIU7RTFj5JWVMDi4eeEgUrV0DTEdTc0tIGzsHFWdXd2RPb18OAPAwVC4SG1HGmh2eD2B2oCSSqk841aDxykFy9WwVkgJ043F4XloBDxF2EcCQaCwuDwLXe7S+nh6fQG4FmESi41GjDhqQAzDyAOxTGZzBAoDA4fDPchY+jUdIEggAKVIADdSOKqZAAO7YYjEZ6mPWQcqVaq1SBq4i0ZAhbggqKpRA0UToDxwgDyegAVshXcNxCdkI1kAAKUEASmMrNBjudvo8wxRMkSuVgZUx2u4BC11EwAGtLvRIMgzLVMGSxZTJbnIMq1Rr8LkhayAHLUFAAQkgAEksU7qC63QGXMaKvZkFjSd4anBUJB-FzFahwEA>
 */

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

const todo: Todo = {
	id: 1,
	title: "Don't change the id plz",
	completed: false,
}
todo.id = 2;  // 😳


interface BetterTodo {
	readonly id: number;
	title: string;
	completed: boolean;
}
const todo2: BetterTodo = {
	id: 2,
	title: "id is readonly but only in TypeScript",
	completed: false,
}
// todo2.id = 1337;  // TypeScript says no, but JavaScript will still change the value

const todo1protected = Object.freeze(todo);
// todo1protected.title = "This wont work in either TypeScript or JavaScript";  // Nope! Is protected from changes in both TS and JS
