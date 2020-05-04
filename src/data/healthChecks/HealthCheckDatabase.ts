import Dexie from "dexie"
import { QuestionOptions } from "../../components/HealthCheck/_config/shape"

/**
 * Health check structure
 *
 * @export
 * @interface IBaseHealthCheck
 */
export interface IBaseHealthCheck {
	id?: number
	clientId: number
	answers: QuestionOptions[]
	createdAt?: number
}

/**
 * Health check structure when updating content
 *
 * @export
 * @interface IBaseHealthCheckForUpdating
 */
export interface IBaseHealthCheckForUpdating {
	answers?: QuestionOptions[]
}

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
	healthChecks!: Dexie.Table<IBaseHealthCheck, number>

	/**
	 * Creates an instance of HealthCheckDatabase.
	 *
	 * @memberof HealthCheckDatabase
	 */
	constructor() {
		super("HealthCheckDatabase")
		this.applyMigrations()

		this.healthChecks = this.table("healthChecks")
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
		this.version(1).stores({
			healthChecks: "++id, clientId, *answers, createdAt",
		})
	}
}

const HealthCheckDB = new HealthCheckDatabase()

export default HealthCheckDB
