import HealthCheckDB, { IBaseHealthCheck } from "./HealthCheckDatabase"

const findHCById = (
	id: number,
	clientId: number
): Promise<IBaseHealthCheck> => {
	return HealthCheckDB.transaction("r", HealthCheckDB.healthChecks, () => {
		return HealthCheckDB.healthChecks.where({ id, clientId }).first()
	})
}

export default findHCById
