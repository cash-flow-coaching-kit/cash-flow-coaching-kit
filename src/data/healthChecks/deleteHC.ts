import HealthCheckDB from "./HealthCheckDatabase"

const deleteHealthCheck = (id: number): Promise<number> => {
	return HealthCheckDB.transaction("rw", HealthCheckDB.healthChecks, () => {
		return HealthCheckDB.healthChecks.where("id").equals(id).delete()
	})
}

export default deleteHealthCheck
