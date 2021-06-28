import { Machine } from "xstate"

export type StateMap = "loading" | "empty" | "hasItems"

/**
 * Health checking listing state machine schema
 *
 * @export
 * @interface IHCListingSchema
 */
export interface IHCListingSchema {
	states: {
		loading: Record<string, unknown>
		empty: Record<string, unknown>
		hasItems: Record<string, unknown>
	}
}

export type HCListingEvents = { type: "IS_EMPTY" } | { type: "HAS_ITEMS" }

/**
 * Defines the state machine used for the Health check
 * listing component
 *
 */
export const HCListingMachine = Machine<
	null,
	IHCListingSchema,
	HCListingEvents
>({
	key: "hc_listing_machine",
	initial: "loading",
	states: {
		loading: {
			on: {
				IS_EMPTY: "empty",
				HAS_ITEMS: "hasItems",
			},
		},
		empty: {},
		hasItems: {
			on: {
				IS_EMPTY: "empty",
			},
		},
	},
})
