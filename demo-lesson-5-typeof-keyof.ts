/**
 * TypeScript Playground
 * typeof and keyof
 *
 * <https://www.typescriptlang.org/play/?#code/PQKhCgAIUgVBPADgUwMoGMBOBLRAXSABQBsBDeAc0wHsBXAOwBMoY8llqAzSUpyAa2TwuLYOHDBgkdNXoBnArTnJM9UgFtkkALyQARACtqAC156A3OOLJFy1Rq27DJs5YlSA4snorSeLaSQbCiQnDTqQcZawVpckAAGSipqmvHgMZAAqnYAcg46QexxSfaabjLyBEam9AUA3uAAkCUpyABc+tVmADRNNNYdepqaALTE1JiMer2N1gBuyMQdAIwAzKsA7L0AvuKSkACiAB54mKToBHhRhSFh1BGB1ABGBsgX6exZdgUxcV30bgyAGFSJh6k11LxaJxznhaJgVB0FDh6BRLI11NRGIskadsKj0fBkKCOvRaOonip0ZxaDjIMj8WimnhqAB3DpPajUay8Sy7dw3LQgzAAaSEcgKQyhMIu8JUekgAB99JjscQFcq9ETQRr9DTFhYPiFhWL4BLdIJhNxheZIJB9ibxZBWdhiMRIJSeJBiNh-Gd3QzUZAGNhZAkpWSZXCEZhdUMsQalfptbGk3p9eq0yzWXo0gLjqdYQInXcHpBnq93vsMtkVKbzcWrV8qUatLXRU6LUI4r9uP9bfapHoWg44-1kHH5gbwEA>
 */

// const username = "johan";

let username = "johan";

// Generate a type from the type of `username`
type UserName = typeof username;

const johan = {
	username: "johan",
	role: "meme-lord",
	level: 1337,
}

// Extract the type from a object
type User = typeof johan;

type Car = {
	manufacturer: string;
	model: string;
	year: number;
	fuel: string;
	tow: boolean;
}

// type CarKeys = "manufacturer" | "model" | "year" | "fuel";
type CarKeys = keyof Car;  // CarKeys will be a literal string union `"manufacturer" | "model" | "year" | "fuel" | "tow"`

// Extract keys from a object
// type UserKeys = keyof User;
type UserKeys = keyof typeof johan;  // "username" | "role" | "level"
