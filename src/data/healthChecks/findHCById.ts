import HealthCheckDB, { IBaseHealthCheck } from "./HealthCheckDatabase"

/**
 * Finds a health check by a id and a client id.
 *
 * @param {number} id ID of the health check
 * @param {number} clientId ID of the related client
 * @returns Promise<IBaseHealthCheck>
 */
const findHCById = (
	id: number,
	clientId: number
): Promise<IBaseHealthCheck> => {
	return HealthCheckDB.transaction("r", HealthCheckDB.healthChecks, () => {
		return HealthCheckDB.healthChecks.where({ id, clientId }).first()
	})
}

export default findHCById
