import HealthCheckDB, { IBaseHealthCheck } from "./HealthCheckDatabase"

const findHCById = (id: number): Promise<IBaseHealthCheck> => {
	return HealthCheckDB.transaction("r", HealthCheckDB.healthChecks, () => {
		return HealthCheckDB.healthChecks.where("id").equals(id).first()
	})
}

export default findHCById
