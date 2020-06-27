import { format } from "date-fns"
import { FileListingStruct } from "./shape"
import { HealthCheckDataStruct, CFCStruct } from "../../../data/_config/shape"
import { canvasDisplayTitle } from "../../CFC/__config/utilities"

export function healthCheckToData(): ReducerHOF<
	FileListingStruct[],
	HealthCheckDataStruct
> {
	return (acc, cur): FileListingStruct[] =>
		acc.concat({
			name: `Completed Health Check ${
				cur.createdAt && format(cur.createdAt, "'-' dd/MM/yyyy hh:mm a")
			}`,
			id: `${cur.id || -1}`,
		})
}

export function cfcToData(): ReducerHOF<FileListingStruct[], CFCStruct> {
	return (acc, cur): FileListingStruct[] =>
		acc.concat({
			name: canvasDisplayTitle(cur),
			id: `${cur.id || -1}`,
		})
}
