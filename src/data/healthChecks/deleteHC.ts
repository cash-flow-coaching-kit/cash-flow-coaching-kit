import HealthCheckDB from "./HealthCheckDatabase"
import { HealthCheckId } from "../_config/shape"

const deleteHealthCheck = (id: HealthCheckId): Promise<number> => {
	return HealthCheckDB.transaction("rw", HealthCheckDB.healthChecks, () => {
		return HealthCheckDB.healthChecks.where("id").equals(id).delete()
	})
}

export default deleteHealthCheck
