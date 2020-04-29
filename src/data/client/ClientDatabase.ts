import Dexie from "dexie"
import { IBaseClient } from "../../state/client/client-outline"

class ClientDatabase extends Dexie {
	clients!: Dexie.Table<IBaseClient, number>

	constructor() {
		super("ClientDatabase")
		this.applyMigrations()

		this.clients = this.table("clients")
	}

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
