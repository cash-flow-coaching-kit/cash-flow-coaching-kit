import ILogicLayer from "../_config/logicLayer"
import HealthCheckDB from "./HealthCheckDatabase"
import {
	HealthCheckDataStruct,
	BaseHealthCheckStruct,
	HealthCheckId,
	ClientId,
} from "../_config/shape"

/**
 * Logic implementation for the Health check database
 *
 * @class HealthCheckLogic
 * @extends {ILogicLayer<HealthCheckDataStruct, BaseHealthCheckStruct>}
 */
class HealthCheckLogic extends ILogicLayer<
	HealthCheckDataStruct,
	BaseHealthCheckStruct
> {
	/**
	 * Creates an instance of HealthCheckLogic.
	 *
	 * @memberof HealthCheckLogic
	 */
	constructor() {
		super(HealthCheckDB, HealthCheckDB.healthChecks)
	}

	/**
	 * Finds a health check by the id and clientId
	 *
	 * @param {HealthCheckId} id
	 * @param {ClientId} clientId
	 * @returns {Promise<HealthCheckDataStruct>}
	 * @memberof HealthCheckLogic
	 */
	public findByClientId(
		id: HealthCheckId,
		clientId: ClientId
	): Promise<HealthCheckDataStruct | undefined> {
		return this.database.transaction("r", this.table.name, () =>
			this.table.where({ id, clientId }).first()
		)
	}

	/**
	 * Finds all the health checks for a given client
	 *
	 * @param {ClientId} clientId
	 * @returns {Promise<HealthCheckDataStruct[]>}
	 * @memberof HealthCheckLogic
	 */
	public findClientHealthChecks(
		clientId: ClientId
	): Promise<HealthCheckDataStruct[]> {
		return this.database.transaction("r", this.table.name, () =>
			this.table.where("clientId").equals(clientId).toArray()
		)
	}
}

// Creates a instance of the logic class and exports the instance
const HealthCheckUseCase = new HealthCheckLogic()

export default HealthCheckUseCase
