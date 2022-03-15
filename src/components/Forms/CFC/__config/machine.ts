import { createMachine } from "xstate"

// interface Schema {
// 	states: {
// 		loading: Record<string, unknown>
// 		success: Record<string, unknown>
// 		failure: Record<string, unknown>
// 	}
// }

type Context = Record<string, unknown>

type States = {
	value: "loading" | "success" | "failure"
	context: Context
}

type Events = { type: "RESOLVE" } | { type: "REJECT" } | { type: "RETRY" }

const fetchMachine = createMachine<Context, Events, States>({
	id: "fetch",
	initial: "loading",
	states: {
		loading: {
			on: {
				RESOLVE: "success",
				REJECT: "failure",
			},
		},
		success: {
			on: {
				REJECT: "failure",
			},
		},
		failure: {
			on: {
				RETRY: {
					target: "loading",
				},
			},
		},
	},
})

export default fetchMachine
