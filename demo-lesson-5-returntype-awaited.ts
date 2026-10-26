/**
 * TypeScript Playground
 * ReturnType and Awaited
 *
 * <https://www.typescriptlang.org/play/?#code/PQKhCgAIUgVBPADgUwMoGMBOBLRAXSABQBsBDeAc0wHsBXAOwBMoYAlZPWzehFSUppACCAd1LY8yZtGDhw6avQDOBJeUgBeSAAoAtkooAuSCpz0KASk0A+SAG9wASAXLqxZADpi1CtoBEAJp0JuKMhn4ANJD6lgDcTpgcXPTRBvEAvnLAwJB4SMiQqOS8BVp5KNQAZiHwsZCQ2ToxxqbY5lYatq3m4I3lBUXw7JzcJZqQw8klADyDJdZ1DTndFOD9heSTo-njWzz50-1VNQv1jStyLio1Qkrw9OjjpHcPTQYteGaWNvZOV26eby+QLBNTYMKRVJxBJJbhQjJydaDW73dB7MZadEHI7VNTwFEPU5LIg0XTYJTIaYrayInbIl5o5BKNwANykWL4WlE4kkjFm5AJjJG+xQRPOnzaqzWdIFDPYzOIbMYHOQQmIxAAkvQAPL0ZAkZDPVUs6jggAipvMsAAFuTxtyJFJpirDvljnjBdYxcsJT0gA>
 */

const say = (msg: string) => {
	console.log("You said:", msg);
	return msg;
}

// type SayType = typeof say;  // (msg: string) => string
// type SayReturnType = ReturnType<SayType>;  // string
type SayReturnType = ReturnType<typeof say>;  // string

const sayAsync = async (msg: string) => {
	console.log("You said:", msg);
	return msg;
}

type SayAsyncReturnType = ReturnType<typeof sayAsync>;  // Promise<string>

type SayAsyncResolvedReturnType = Awaited<SayAsyncReturnType>;  // string

type SayAsyncResolvedReturnTypeAllInOnePleaseAvoidDoingThis = Awaited<ReturnType<typeof sayAsync>>;  // string
