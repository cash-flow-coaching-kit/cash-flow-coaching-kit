import { DiscoverTopicsStruct, SingleDownloadProps } from "./shape"

export const staticTitles: Record<SingleDownloadProps["id"], string> = {
	changeLevers: "Change Levers",
	actionChecklist: "Action Checklist",
}

export const discoverTopics: DiscoverTopicsStruct[] = [
	{
		name: "Business Plan - Activity",
		id: "Business Plan - Activity",
		path: "/pdf/BusinessPlan-Activity.pdf",
	},
	{
		name: "Record Keeping - Activity",
		id: "Record Keeping - Activity",
		path: "/pdf/RecordKeeping-Activity.pdf",
	},
	{
		name: "Funding your business - Activity",
		id: "Funding your business - Activity",
		path: "/pdf/Funding-Activity.pdf",
	},
	{
		name: "Know your commitments - Activity",
		id: "Know your commitments - Activity",
		path: "/pdf/KnowYourCommitments-Activity.pdf",
	},
]
