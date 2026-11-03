# Express web server with Node and TypeScript

A small Express server written in TypeScript. Use Node.js 24 and npm.
Run the commands below from the app directory, where `package.json` is located.

## Install the existing app

If you already have this project, install the versions recorded in the lockfile:

```sh
npm ci
```

You do not need to run `npm init` or recreate the configuration files.

## Run during development

```sh
npm run dev
```

Open [http://localhost:3001/](http://localhost:3001/) to see the JSON response.
The server restarts when you save changes. Stop it with Ctrl+C.
If port 3001 is busy, choose a free port, for example `PORT=3101 npm run dev`.

`tsx` runs the TypeScript source without a separate build step. It does not
check types. Run the type check separately:

```sh
npm run check
```

## Build and run with Node.js

```sh
npm run build
npm start
```

The build checks types and generates JavaScript in `dist/`. If there are type
errors, the build fails without generating new files. Fix the errors before starting.
`npm start` runs `node dist/index.js`, using the built JavaScript rather than `tsx`.
Open [http://localhost:3001/](http://localhost:3001/) to see the response.

Stop the server with Ctrl+C. Rebuild after changing the source code; `npm start`
does not build or watch for changes. Stop the development server before starting
the built server on the same port.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Run TypeScript and restart when source files change. |
| `npm run check` | Check types without generating files. |
| `npm run build` | Check types and generate JavaScript in `dist/`. |
| `npm start` | Run the built JavaScript with Node.js. |

## Create a similar app from scratch

These steps are for a new project in an empty directory. Skip them when using
the existing app.

### 1. Create an ES module project and install packages

```sh
mkdir express-todos
cd express-todos
npm init --yes --init-type=module
npm install express
npm install -D typescript tsx @types/node@24 @types/express
```

Express is needed when running the app. The development packages provide the
TypeScript compiler, `tsx` and type definitions. `@types/node@24` matches Node.js 24.

### 2. Add the npm scripts

Keep `"type": "module"` in `package.json`. Replace its `scripts` section with
these entries, keeping the other package settings:

```json
{
	"scripts": {
		"build": "tsc",
		"check": "tsc --noEmit",
		"dev": "tsx --watch src/index.ts",
		"start": "node dist/index.js"
	}
}
```

No `main` field is needed; `npm start` uses the `start` script.

### 3. Create tsconfig.json

```jsonc
{
	"compilerOptions": {
		/* Node.js and ES modules */
		"target": "ES2023",
		"module": "NodeNext",
		"moduleResolution": "NodeNext",
		"lib": ["ES2023"],             // JavaScript APIs, without browser/DOM types
		"types": ["node"],             // Node.js APIs, such as process
		"skipLibCheck": true,

		/* Build TypeScript to JavaScript */
		"rootDir": "src",              // Source files
		"outDir": "dist",              // Generated JavaScript files
		"noEmit": false,               // Let tsc generate JavaScript
		"noEmitOnError": true,         // Don't emit if there are errors

		/* Import paths */
		"allowImportingTsExtensions": true,
		"rewriteRelativeImportExtensions": true, // Rewrite relative .ts imports to .js

		/* Compatibility with tools such as tsx */
		"isolatedModules": true,       // Check compatibility with per-file transpilation

		/* Strict code quality */
		"strict": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"noImplicitReturns": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true
	},
	"include": ["src/**/*.ts"],
	"exclude": ["node_modules", "dist"]
}
```

### 4. Create the server

Create a `src` directory and a file named `src/index.ts`:

```ts
import express from "express";

const PORT = Number(process.env.PORT ?? 3001);
const app = express();

// Respond to GET / requests
app.get("/", (_req, res) => {
	res.json({ message: "Hello from Express!" });
});

// Listen for incoming requests
app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
```

### 5. Ignore installed packages and generated files

Create `.gitignore`:

```gitignore
node_modules/
dist/
.env
.DS_Store
```

### 6. Run and check the app

Use `npm run dev` and `npm run check` during development. To run the built app,
stop the development server, run `npm run build`, then `npm start`.
