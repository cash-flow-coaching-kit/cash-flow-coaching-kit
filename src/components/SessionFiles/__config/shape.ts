export type SelectedFiles = {
	changeLevers: boolean
	actionChecklist: boolean
	healthChecks: boolean[]
	cfc: boolean[]
	discoverTopics: boolean[]
}

export type SingleDownloadProps = {
	title: string
	id: "changeLevers" | "actionChecklist"
}

export type DiscoverTopicsStruct = FileListingStruct & {
	path: string
}

export type SetSelectedFiles = React.Dispatch<
	React.SetStateAction<SelectedFiles>
>

export type FileListingStruct = {
	name: string
	id: string
}

export interface FileListingProps {
	title: string
	setState: SetSelectedFiles
	state: boolean[]
	data: FileListingStruct[]
	id: "healthChecks" | "cfc" | "discoverTopics"
	loading?: boolean
}

export interface CheckboxListItemProps {
	label: string
	checked: boolean
	onClick: () => void
}
