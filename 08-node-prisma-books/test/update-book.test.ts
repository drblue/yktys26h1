import { isUpdateBookPayload } from "./../src/guards/isUpdateBookPayload.ts";
import assert from "node:assert/strict";
import { test } from "node:test";

test("accepts an update with only a title", () => {
	assert.equal(isUpdateBookPayload({ title: "Dune" }), true);
});

test("accepts an update with only pages", () => {
	assert.equal(isUpdateBookPayload({ pages: 180 }), true);
});

test("accepts an update with both title and pages", () => {
	assert.equal(isUpdateBookPayload({ title: "Dune", pages: 180 }), true);
});

test("rejects an update with a valid title and an invalid page count", () => {
	assert.equal(isUpdateBookPayload({ title: "Dune", pages: "240" }), false);
});

test("rejects a title sent as a number", () => {
	assert.equal(isUpdateBookPayload({ title: 240 }), false);
});

test("rejects a page count sent as a text", () => {
	assert.equal(isUpdateBookPayload({ pages: "240" }), false);
});
