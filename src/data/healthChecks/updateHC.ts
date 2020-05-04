import HealthCheckDB, {
	IBaseHealthCheckForUpdating,
} from "./HealthCheckDatabase"

const updateHC = (
	id: number,
	quiz: IBaseHealthCheckForUpdating
): Promise<number> => {
	return HealthCheckDB.transaction("rw", HealthCheckDB.healthChecks, () => {
		return HealthCheckDB.healthChecks.update(id, quiz)
	})
}

export default updateHC
