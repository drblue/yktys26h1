import { getReadingDays } from "./../src/utils/getReadingDays.ts";
import assert from "node:assert/strict";
import { test } from "node:test";

test("20 pages take one reading day", () => {
	assert.strictEqual(getReadingDays(20), 1);
});

test("21 pages take two reading days", () => {
	assert.strictEqual(getReadingDays(21), 2);
});
