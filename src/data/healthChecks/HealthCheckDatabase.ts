import Dexie from "dexie"

interface IBaseHealthCheck {
	id?: number
	clientId: number
	answers: number[]
	createdAt?: number
}

class HealthCheckDatabase extends Dexie {
	healthChecks!: Dexie.Table<IBaseHealthCheck, number>

	constructor() {
		super("HealthCheckDatabase")
		this.applyMigrations()

		this.healthChecks = this.table("healthChecks")
	}

	private applyMigrations(): void {
		// Version 1
		this.version(1).stores({
			healthChecks: "++id, clientId, *answers, createdAt",
		})
	}
}

const HealthCheckDB = new HealthCheckDatabase()

export default HealthCheckDB
