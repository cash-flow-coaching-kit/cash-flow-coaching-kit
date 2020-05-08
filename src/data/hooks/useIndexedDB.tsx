import { useState, useEffect } from "react"
import Dexie from "dexie"

/**
 * Hook to interact with the indexeddb
 *
 * @template RT
 * @param {Dexie} db
 * @param {Dexie.Table<RT, number>} table
 * @param {RT[]} initial
 * @returns {[RT[], () => Promise<RT[]>, boolean]}
 */
function useIndexedDB<RT>(
	db: Dexie,
	table: Dexie.Table<RT, number>,
	initial: RT[]
): [RT[], () => Promise<RT[]>, boolean] {
	const [data, setData] = useState<RT[]>(initial)
	const [loading, setLoading] = useState<boolean>(true)
	const retrive = async (): Promise<RT[]> => {
		return db.transaction("r", table, async () => {
			const dbData = await table.toArray()
			setData(dbData)

			return dbData
		})
	}

	useEffect(() => {
		// eslint-disable-next-line func-names
		;(async function (): Promise<void> {
			await retrive()
			setLoading(false)
		})()
	}, [])

	return [data, retrive, loading]
}

export default useIndexedDB