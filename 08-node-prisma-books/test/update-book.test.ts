import { isUpdateBookPayload } from "./../src/guards/isUpdateBookPayload.ts";
import assert from "node:assert/strict";
import { test } from "node:test";

test("accepts an update with only a title", () => {
	assert.equal(isUpdateBookPayload({ title: "Dune" }), true);
});

test("accepts an update with only pages", () => {
	assert.equal(isUpdateBookPayload({ pages: 180 }), true);
});

test("rejects a page count sent as a text", () => {
	assert.equal(isUpdateBookPayload({ pages: "240" }), false);
});
