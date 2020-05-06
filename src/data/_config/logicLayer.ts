import Dexie from "dexie"
import { DatabaseId } from "./shape"

/**
 * Logic Layer to implement per database/table combo
 *
 * @export
 * @abstract
 * @class ILogicLayer
 * @template E Database entity structure
 * @template I Database id type
 */
abstract class ILogicLayer<E, I = DatabaseId> {
	protected database!: Dexie

	protected table!: Dexie.Table<E, I>

	constructor(database: Dexie, table: Dexie.Table<E, I>) {
		this.database = database
		this.table = table
	}

	protected defaultCreate(data: E): Promise<I> {
		return this.database.transaction("rw", this.table, () => {
			return this.table.add({
				...data,
			})
		})
	}

	protected defaultSync(): Promise<E[]> {
		return this.database.transaction("r", this.table, () => {
			return this.table.toArray()
		})
	}

	public create(data: E): Promise<I> {
		return this.defaultCreate(data)
	}

	public syncWithDatabase(): Promise<E[]> {
		return this.defaultSync()
	}
}

export default ILogicLayer
