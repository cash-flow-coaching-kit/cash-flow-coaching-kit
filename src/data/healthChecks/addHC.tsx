import HealthCheckDB, { IBaseHealthCheck } from "./HealthCheckDatabase"
import { newTimestamp } from "../../util/dates"

const addHealthCheck = (hc: IBaseHealthCheck): Promise<number> => {
	return HealthCheckDB.transaction("rw", HealthCheckDB.healthChecks, () => {
		return HealthCheckDB.healthChecks.add({
			...hc,
			createdAt: newTimestamp(),
		})
	})
}

export default addHealthCheck
