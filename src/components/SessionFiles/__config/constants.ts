import { DiscoverTopicsStruct, SingleDownloadProps } from "./shape"

export const staticTitles: Record<SingleDownloadProps["id"], string> = {
	changeLevers: "Change Levers",
	actionChecklist: "Action Checklist",
}

export const discoverTopics: DiscoverTopicsStruct[] = [
	{
		name: "Planning your business - Quicksnaps",
		id: "Planning your business - Quicksnaps",
		path: "/pdf/Planning your business - Quicksnaps.pdf",
	},
	{
		name: "Business Plan - Activity",
		id: "Business Plan - Activity",
		path: "/pdf/BusinessPlan-Activity.pdf",
	},
	{
		name: "Record Keeping - Quicksnaps",
		id: "Record Keeping - Quicksnaps",
		path: "/pdf/Record keeping - Quicksnaps.pdf",
	},
	{
		name: "Record Keeping - Activity",
		id: "Record Keeping - Activity",
		path: "/pdf/RecordKeeping-Activity.pdf",
	},
	{
		name: "Funding your business - Quicksnaps",
		id: "Funding your business - Quicksnaps",
		path: "/pdf/Funding your business - Quicksnaps.pdf",
	},
	{
		name: "Funding your business - Activity",
		id: "Funding your business - Activity",
		path: "/pdf/Funding-Activity.pdf",
	},
	{
		name: "Managing your cash flow - Quicksnaps",
		id: "Managing your cash flow - Quicksnaps",
		path: "/pdf/Managing your cash flow - Quicksnaps.pdf",
	},
	{
		name: "Planning your regular financial commitments - Quicksnaps",
		id: "Planning your regular financial commitments - Quicksnaps",
		path: "/pdf/Planning your regular financial commitments - Quicksnaps.pdf",
	},
	{
		name: "Know your commitments - Activity",
		id: "Know your commitments - Activity",
		path: "/pdf/KnowYourCommitments-Activity.pdf",
	},
	{
		name: "Tracking your performance - Quicksnaps",
		id: "Tracking your performance - Quicksnaps",
		path: "/pdf/Tracking your performance - Quicksnaps.pdf",
	},
	{
		name: "Selling, closing and succession planning - Quicksnaps",
		id: "Selling, closing and succession planning - Quicksnaps",
		path: "/pdf/Selling, closing and succession planning - Quicksnaps.pdf",
	},
]

export const changeLeversPath = "/pdf/Change levers.pdf"
