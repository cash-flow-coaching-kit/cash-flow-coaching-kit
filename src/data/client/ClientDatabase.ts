import Dexie from "dexie"
import { IBaseClient } from "../../state/client/client-outline"

/**
 * Client database definition
 *
 * @class ClientDatabase
 * @extends {Dexie}
 */
class ClientDatabase extends Dexie {
	/**
	 * Table used to store clients
	 *
	 * @type {Dexie.Table<IBaseClient, number>}
	 * @memberof ClientDatabase
	 */
	clients!: Dexie.Table<IBaseClient, number>

	/**
	 * Creates an instance of ClientDatabase.
	 *
	 * @memberof ClientDatabase
	 */
	constructor() {
		super("ClientDatabase")
		this.applyMigrations()

		this.clients = this.table("clients")
	}

	/**
	 * Applys the migration for the database.
	 * Add new migrations when the database needs to update
	 *
	 * @private
	 * @memberof ClientDatabase
	 */
	private applyMigrations(): void {
		// Version 1.1
		this.version(1.1).stores({
			clients: "++id,name",
		})

		this.version(1.2).stores({
			clients: "++id, name, createdAt",
		})
	}
}

const ClientDB = new ClientDatabase()

export default ClientDB
