import HealthCheckDB from "./HealthCheckDatabase"
import { BaseHealthCheckStruct } from "../_config/shape"

const updateHC = (id: number, quiz: BaseHealthCheckStruct): Promise<number> => {
	return HealthCheckDB.transaction("rw", HealthCheckDB.healthChecks, () => {
		return HealthCheckDB.healthChecks.update(id, quiz)
	})
}

export default updateHC
