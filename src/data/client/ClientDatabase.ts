import Dexie from "dexie"
import { ClientDataStruct, ClientId } from "../_config/shape"

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
	clients!: Dexie.Table<ClientDataStruct, ClientId>

	/**
	 * Creates an instance of ClientDatabase.
	 *
	 * @memberof ClientDatabase
	 */
	constructor() {
		super("ClientDatabase")
		this.applyMigrations()

		this.clients = this.table("clients") // eslint-disable-line

		this.replaceIdsWithStrings()
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

		this.version(2).stores({
			clients: "++id, name, createdAt",
		})
	}

	private replaceIdsWithStrings(): void {
		this.clients.toCollection().modify((client) => {
			if (typeof client.id === "number") {
				client.id = `${client.id}`  // eslint-disable-line
			}
		})
	}
}

const ClientDB = new ClientDatabase()

export default ClientDB
