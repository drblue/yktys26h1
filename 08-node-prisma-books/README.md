# Express, Prisma and SQLite

A TypeScript starter app with an in-memory Todo API and a SQLite database for books. The Book model is defined in `prisma/schema.prisma`.

## Install and start

Use Node.js 24 and npm. Run these commands from this directory.

```sh
npm ci
npm run db:setup
npm run dev
```

The database setup generates Prisma Client, applies the included migration, and adds two sample books to `books.db`. Existing books are preserved if you run setup again.

In Postman, send a GET request to `http://localhost:3001/todos` to check that the server is running. The book routes are added as you work through the course material.

## Check and build

Run `npm run check` to check types. To run the compiled app, stop the development server with Ctrl+C, then run `npm run build` followed by `npm start`.
