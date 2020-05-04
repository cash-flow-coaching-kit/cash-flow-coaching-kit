import HealthCheckDB, { IBaseHealthCheck } from "./HealthCheckDatabase"
import { newTimestamp } from "../../util/dates"

/**
 * Adds a health check to the db. Returns the key for the
 * db entry
 *
 * @param {IBaseHealthCheck} hc Health check to add
 * @returns Promise<void>
 */
const addHealthCheck = (hc: IBaseHealthCheck): Promise<number> => {
	return HealthCheckDB.transaction("rw", HealthCheckDB.healthChecks, () => {
		return HealthCheckDB.healthChecks.add({
			...hc,
			createdAt: newTimestamp(),
		})
	})
}

export default addHealthCheck
