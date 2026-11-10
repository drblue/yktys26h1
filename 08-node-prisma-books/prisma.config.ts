import { defineConfig } from "prisma/config";
import { databaseUrl } from "./src/lib/database-url.ts";

export default defineConfig({
	schema: "prisma/schema.prisma",
	migrations: {
		path: "prisma/migrations",
		seed: "tsx prisma/seed.ts",
	},
	datasource: {
		url: databaseUrl,
	},
});
