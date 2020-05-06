import { QuestionOptions } from "../../components/HealthCheck/_config/shape"
import { PossibleActionItems } from "../../state/action-checklist/shape"

// Defines all the ID types for the different tables
// All inherits from the base Id, but they are separated
// to make it clear what is being referenced in code
export type DatabaseId = number
export type ClientId = DatabaseId
export type HealthCheckId = DatabaseId
export type ActionChecklistId = DatabaseId
export type ActionChecklistPriorityId = DatabaseId

/**
 * Base structure for any database item
 *
 * @export
 * @interface BaseDatabaseStruct
 * @template T type for the `id` field
 */
export interface BaseDatabaseStruct<T = DatabaseId> {
	id?: T
}

/**
 * Adds fields for timestamp values, it is up to the
 * migration to define both these fields
 *
 * @export
 * @interface WithTimestamps
 */
export interface WithTimestamps {
	createdAt?: number
	updatedAt?: number
}

/**
 * Defines a relationship with a client
 *
 * @export
 * @interface WithClientRelationship
 */
export interface WithClientRelationship {
	clientId: ClientId
}

/**
 * Defines a relationship with a health check
 *
 * @export
 * @interface WithHealthCheckRelationship
 */
export interface WithHealthCheckRelationship {
	healthCheckId: HealthCheckId
}

/**
 * Defines a relationship with a Action checklist
 *
 * @export
 * @interface WithActionChecklistRelationship
 */
export interface WithActionChecklistRelationship {
	actionChecklistId: ActionChecklistId
}

/**
 * Base data structure used to define a client
 * Use this field when creating/updating a client
 *
 * @export
 * @interface BaseClientStruct
 */
export interface BaseClientStruct {
	name: string
}

/**
 * Structure used when defining the client table
 *
 * @export
 * @interface ClientDataStruct
 * @extends {BaseDatabaseStruct<ClientId>}
 * @extends {WithTimestamps}
 * @extends {BaseClientStruct}
 */
export interface ClientDataStruct
	extends BaseDatabaseStruct<ClientId>,
		WithTimestamps,
		BaseClientStruct {}

/**
 * Base data structure for a health check
 * Use this field when creating/updating a
 * health check
 *
 * @export
 * @interface BaseHealthCheckStruct
 */
export interface BaseHealthCheckStruct {
	answers: QuestionOptions[]
}

/**
 * Structure used when defining the health check table
 *
 * @export
 * @interface HealthCheckDataStruct
 * @extends {BaseDatabaseStruct<HealthCheckId>}
 * @extends {WithTimestamps}
 * @extends {WithClientRelationship}
 * @extends {BaseHealthCheckStruct}
 */
export interface HealthCheckDataStruct
	extends BaseDatabaseStruct<HealthCheckId>,
		WithTimestamps,
		WithClientRelationship,
		BaseHealthCheckStruct {}

/**
 * Base data structure for a action checklist item
 * Use this field when creating/updating a
 * action checklist item
 *
 * @export
 * @interface BaseActionChecklistStruct
 */
export interface BaseActionChecklistStruct {
	completed: boolean
	description: string
	actionContainer: PossibleActionItems
}

/**
 * Structure used when defining the action checklist table
 *
 * @export
 * @interface ActionChecklistStruct
 * @extends {BaseDatabaseStruct<ActionChecklistId>}
 * @extends {WithClientRelationship}
 */
export interface ActionChecklistStruct
	extends BaseDatabaseStruct<ActionChecklistId>,
		BaseActionChecklistStruct,
		WithClientRelationship {}

/**
 * Base data structure for a action checklist priority item
 * Use this field when creating/updating a
 * action checklist priority item
 *
 * @export
 * @interface BaseActionChecklistPriorityStruct
 */
export interface BaseActionChecklistPriorityStruct {
	actionContainer: PossibleActionItems
	order: ActionChecklistId[]
}

/**
 * Structure used when defining the action checklist priority
 * table
 *
 * @export
 * @interface ActionChecklistPriorityStruct
 * @extends {BaseDatabaseStruct<ActionChecklistPriorityId>}
 * @extends {WithClientRelationship}
 */
export interface ActionChecklistPriorityStruct
	extends BaseDatabaseStruct<ActionChecklistPriorityId>,
		BaseActionChecklistPriorityStruct,
		WithClientRelationship {}
