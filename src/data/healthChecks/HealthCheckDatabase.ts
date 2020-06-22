import Dexie from "dexie"
import { HealthCheckDataStruct, HealthCheckId } from "../_config/shape"

/**
 * Health check database definition
 *
 * @class HealthCheckDatabase
 * @extends {Dexie}
 */
class HealthCheckDatabase extends Dexie {
	/**
	 * Table used to store health checks
	 *
	 * @type {Dexie.Table<IBaseHealthCheck, number>}
	 * @memberof HealthCheckDatabase
	 */
	healthChecks!: Dexie.Table<HealthCheckDataStruct, HealthCheckId>

	/**
	 * Creates an instance of HealthCheckDatabase.
	 *
	 * @memberof HealthCheckDatabase
	 */
	constructor() {
		super("HealthCheckDatabase")
		this.applyMigrations()

		this.healthChecks = this.table("healthChecks")

		this.replaceIdsWithStrings()
	}

	/**
	 * Applys the migration for the database.
	 * Add new migrations when the database needs to update
	 *
	 * @private
	 * @memberof HealthCheckDatabase
	 */
	private applyMigrations(): void {
		// Version 1
		this.version(2).stores({
			healthChecks: "++id, clientId, *answers, createdAt",
		})
		this.version(2.4).stores({
			healthChecks: "++id, clientId, *answers, createdAt, [id+clientId]",
		})
	}

	private replaceIdsWithStrings(): void {
		this.healthChecks.toCollection().modify((healthCheck) => {
			if (typeof healthCheck.id === "number") {
				healthCheck.id = `${healthCheck.id}`
			}
			if (typeof healthCheck.clientId === "number") {
				healthCheck.clientId = `${healthCheck.clientId}`
			}
		})
	}
}

const HealthCheckDB = new HealthCheckDatabase()

export default HealthCheckDB
