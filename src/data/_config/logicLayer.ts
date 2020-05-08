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
	/**
	 * Database to target, this database should be
	 * extending Dexie
	 *
	 * @protected
	 * @type {Dexie}
	 * @memberof ILogicLayer
	 */
	protected database!: Dexie

	/**
	 * Table within the defined database
	 *
	 * @protected
	 * @type {Dexie.Table<E, I>}
	 * @memberof ILogicLayer
	 */
	protected table!: Dexie.Table<E, I>

	/**
	 * Creates an instance of ILogicLayer.
	 *
	 * @param {Dexie} database
	 * @param {Dexie.Table<E, I>} table
	 * @memberof ILogicLayer
	 */
	constructor(database: Dexie, table: Dexie.Table<E, I>) {
		this.database = database
		this.table = table
	}

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
		return this.database.transaction("rw", this.table, () => {
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
		return this.database.transaction("r", this.table, () => {
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
		return this.database.transaction("rw", this.table, () => {
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
		return this.database.transaction("rw", this.table, () => {
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
}

export default ILogicLayer
