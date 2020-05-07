import ILogicLayer from "../_config/logicLayer"
import HealthCheckDB from "./HealthCheckDatabase"
import {
	HealthCheckDataStruct,
	BaseHealthCheckStruct,
	HealthCheckId,
	ClientId,
} from "../_config/shape"

class HealthCheckLogic extends ILogicLayer<
	HealthCheckDataStruct,
	BaseHealthCheckStruct
> {
	constructor() {
		super(HealthCheckDB, HealthCheckDB.healthChecks)
	}

	public findByClientId(
		id: HealthCheckId,
		clientId: ClientId
	): Promise<HealthCheckDataStruct> {
		return this.database.transaction("r", this.table, () => {
			return this.table.where({ id, clientId }).first()
		})
	}

	public findClientHealthChecks(
		clientId: ClientId
	): Promise<HealthCheckDataStruct[]> {
		return this.database.transaction("r", this.table, () => {
			return this.table.where("clientId").equals(clientId).toArray()
		})
	}
}

const HealthCheckUseCase = new HealthCheckLogic()

export default HealthCheckUseCase
