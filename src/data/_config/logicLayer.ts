import Dexie, { IndexableType } from "dexie"
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
abstract class ILogicLayer<E, B, I = DatabaseId> {
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

	protected defaultDelete<T extends IndexableType>(id: T): Promise<number> {
		return this.database.transaction("rw", this.table, () => {
			return this.table.where("id").equals(id).delete()
		})
	}

	protected defaultUpdate(id: I, data: B): Promise<number> {
		return this.database.transaction("rw", this.table, () => {
			return this.table.update(id, data)
		})
	}

	public create(data: E): Promise<I> {
		return this.defaultCreate(data)
	}

	public syncWithDatabase(): Promise<E[]> {
		return this.defaultSync()
	}

	public delete<T extends IndexableType>(id: T): Promise<number> {
		return this.defaultDelete(id)
	}

	public update(id: I, data: B): Promise<number> {
		return this.defaultUpdate(id, data)
	}
}

export default ILogicLayer
