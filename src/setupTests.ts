// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect"

import Dexie from "dexie"
import indexedDB from "fake-indexeddb"
import FDBKeyRange from "fake-indexeddb/lib/FDBKeyRange"

Dexie.dependencies.indexedDB = indexedDB
Dexie.dependencies.IDBKeyRange = FDBKeyRange

Object.defineProperty(global.window, "crypto", {
	value: {
		getRandomValues: jest.fn((x) => x.length.toString()),
	},
})
