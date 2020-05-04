import { IClientState } from "../../../state/client/client-outline"

/**
 * Prop definition for the `<ClientList>` component
 *
 * @export
 * @interface IClientListProps
 */
export interface IClientListProps {
	store: IClientState
}

/**
 * Client listing state machine schema
 *
 * @export
 * @interface IClientListingSchema
 */
export interface IClientListingSchema {
	states: Record<"loading" | "empty" | "data", {}>
}

/**
 * Client listing state machine events
 *
 * @export
 * @type ClientListingEvents
 */
export type ClientListingEvents = { type: "IS_EMPTY" } | { type: "HAS_DATA" }
