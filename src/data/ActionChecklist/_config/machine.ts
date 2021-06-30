import { Machine } from "xstate"

export type StateMap = "loading" | "content"

export interface IActionChecklistSchema {
	states: {
		loading: Record<string, unknown>
		content: Record<string, unknown>
	}
}

export type ACEvents = { type: "HAS_CONTENT" }

export const ActionChecklistMachine = Machine<
	null,
	IActionChecklistSchema,
	ACEvents
>({
	key: "ac_machine",
	initial: "loading",
	states: {
		loading: {
			on: {
				HAS_CONTENT: "content",
			},
		},
		content: {},
	},
})
