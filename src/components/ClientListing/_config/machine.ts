import { Machine } from "xstate"
import { IClientListingSchema, ClientListingEvents } from "./shape"

/**
 * Defines the state machine used for the
 * Client listing component
 *
 */
const ClientListingMachine = Machine<
	null,
	IClientListingSchema,
	ClientListingEvents
>({
	key: "client_listing_machine",
	initial: "loading",
	states: {
		loading: {
			on: {
				IS_EMPTY: "empty",
				HAS_DATA: "data",
			},
		},
		empty: {
			on: {
				HAS_DATA: "data",
			},
		},
		data: {},
	},
})

export default ClientListingMachine
