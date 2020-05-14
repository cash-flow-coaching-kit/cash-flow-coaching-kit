import Dexie, { IndexableType } from "dexie"
import { DatabaseId, ClientId } from "./shape"

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
	/**
	 * Creates an instance of ILogicLayer.
	 *
	 * @param {Dexie} database Database to target, this database should be extending Dexie
	 * @param {Dexie.Table<E, I>} table Table within the defined database
	 * @memberof ILogicLayer
	 */
	constructor(protected database: Dexie, protected table: Dexie.Table<E, I>) {}

	/**
	 * Default create method, this is called in the public
	 * `create` method by default, however when implementing
	 * the Logic layer, you'll be able to override that method
	 * if you don't want to use the default functionality
	 *
	 * @protected
	 * @param {E} data
	 * @returns {Promise<I>}
	 * @memberof ILogicLayer
	 */
	protected defaultCreate(data: E): Promise<I> {
		return this.database.transaction("rw", this.table.name, () => {
			return this.table.add({
				...data,
			})
		})
	}

	/**
	 * Default database sync method, this is called in the public
	 * `syncWithDatabase` method by default, however when implementing
	 * the Logic layer, you'll be able to override that method
	 * if you don't want to use the default functionality
	 *
	 * @protected
	 * @returns {Promise<E[]>}
	 * @memberof ILogicLayer
	 */
	protected defaultSync(): Promise<E[]> {
		return this.database.transaction("r", this.table.name, () => {
			return this.table.toArray()
		})
	}

	/**
	 * Default delete method, this is called in the public
	 * `delete` method by default, however when implementing
	 * the Logic layer, you'll be able to override that method
	 * if you don't want to use the default functionality
	 *
	 * @protected
	 * @template T
	 * @param {T} id
	 * @returns {Promise<number>}
	 * @memberof ILogicLayer
	 */
	protected defaultDelete<T extends IndexableType>(id: T): Promise<number> {
		return this.database.transaction("rw", this.table.name, () => {
			return this.table.where("id").equals(id).delete()
		})
	}

	/**
	 * Default update method, this is called in the public
	 * `update` method by default, however when implementing
	 * the Logic layer, you'll be able to override that method
	 * if you don't want to use the default functionality
	 *
	 * @protected
	 * @param {I} id
	 * @param {B} data
	 * @returns {Promise<number>}
	 * @memberof ILogicLayer
	 */
	protected defaultUpdate(id: I, data: B): Promise<number> {
		return this.database.transaction("rw", this.table.name, () => {
			return this.table.update(id, data)
		})
	}

	/**
	 * Method to create a new entry into the database.
	 * Uses the `defaultCreate` method by default. However,
	 * you can override the method if required
	 *
	 * @param {E} data
	 * @returns {Promise<I>}
	 * @memberof ILogicLayer
	 */
	public create(data: E): Promise<I> {
		return this.defaultCreate(data)
	}

	/**
	 * Method to pull all entries from the database
	 * Uses the `defaultSync` method by default. However,
	 * you can override the method if required
	 *
	 * @returns {Promise<E[]>}
	 * @memberof ILogicLayer
	 */
	public syncWithDatabase(): Promise<E[]> {
		return this.defaultSync()
	}

	/**
	 * Method to delete a item from the database
	 * Uses the `defaultDelete` method by default. However,
	 * you can override the method if required
	 *
	 * @template T
	 * @param {T} id
	 * @returns {Promise<number>}
	 * @memberof ILogicLayer
	 */
	public delete<T extends IndexableType>(id: T): Promise<number> {
		return this.defaultDelete(id)
	}

	/**
	 * Method to update a item in the database
	 * Uses the `defaultUpdate` method by default. However,
	 * you can override the method if required
	 *
	 * @param {I} id
	 * @param {B} data
	 * @returns {Promise<number>}
	 * @memberof ILogicLayer
	 */
	public update(id: I, data: B): Promise<number> {
		return this.defaultUpdate(id, data)
	}

	/**
	 * Finds all record that belongs to a client
	 *
	 * @param {ClientId} clientId
	 * @returns {Promise<E[]>}
	 * @memberof ILogicLayer
	 */
	public findByClient(clientId: ClientId): Promise<E[]> {
		return this.database.transaction("r", this.table.name, () => {
			return this.table.where({ clientId }).toArray()
		})
	}

	/**
	 * Method to bulk add items to the database. Returns an array
	 * of database ids
	 *
	 * @param {E[]} items
	 * @returns {Promise<I[]>}
	 * @memberof ILogicLayer
	 */
	public bulkAdd(items: E[]): Promise<I[]> {
		return this.database.transaction("rw", this.table.name, () => {
			return this.table.bulkAdd<true>(items, { allKeys: true })
		})
	}

	/**
	 * Method to get an item from the database used an ID
	 *
	 * @param {I} id
	 * @returns {(Promise<E|undefined>)}
	 * @memberof ILogicLayer
	 */
	public findById(id: I): Promise<E | undefined> {
		return this.database.transaction("rw", this.table.name, () => {
			return this.table.get(id)
		})
	}
}

export default ILogicLayer
