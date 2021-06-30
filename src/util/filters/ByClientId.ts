import { WithClientRelationship, ClientId } from "../../data/_config/shape"

/**
 * Used with the array `filter` method, this allows you to
 * filter a object using the `clientId` property.
 * The objects interface must use `WithClientRelationship`
 * to work
 *
 * [{clientId: 4}, ...].filter(filterByClientId(4))
 *
 * @param {ClientId} clientId
 * @returns WithClientRelationship[]
 */
const filterByClientId =
	(clientId: ClientId) =>
	(item: WithClientRelationship): boolean =>
		item.clientId === clientId

export default filterByClientId
