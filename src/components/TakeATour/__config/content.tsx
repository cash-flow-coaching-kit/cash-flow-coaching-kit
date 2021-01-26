import React, { ReactElement, ReactNode } from "react"
import { Typography } from "@material-ui/core"

type WithChildren = {
	children: ReactNode
}

const ContentArea = ({ children }: WithChildren): ReactElement => (
	<div className="content-area">{children}</div>
)

const Title = ({ children }: WithChildren): ReactElement => (
	<Typography variant="h5" component="h6" style={{ marginBottom: "16px" }}>
		{children}
	</Typography>
)

const tourSteps: {
	content: () => ReactElement
	image: string
	alt: string
}[] = [
	{
		content: (): ReactElement => (
			<ContentArea>
				<Title>Asking the Four Key Questions</Title>
				<Typography>
					These are simple questions that determine the cash flow health of a
					business. They apply no matter how big a business is or what stage it
					is at. Answering these Four Key Questions is the foundation to set
					your client up to succeed.
				</Typography>
			</ContentArea>
		),
		image: "/take-a-tour/Tour 1.png",
		alt: "Get started page with expanded four questions",
	},
	{
		content: (): ReactElement => (
			<ContentArea>
				<Title>Coaching model</Title>
				<Typography>
					The Kit has an in-built coaching model, which allows your client to:
				</Typography>
				<ul className="ul-list">
					<Typography component="li">
						Discover more about their business.
					</Typography>
					<Typography component="li">
						Unpack their financials, and explore potential improvements.
					</Typography>
					<Typography component="li">
						Create a strong action plan for the future.
					</Typography>
				</ul>
			</ContentArea>
		),
		image: "/take-a-tour/Tour 2.png",
		alt: "Get started page highlighting the proposed Coaching model",
	},
	{
		content: (): ReactElement => (
			<ContentArea>
				<Title>Health Check</Title>
				<Typography>
					This can help you get to know your client and their business. It will
					show you what they need guidance on and support those needs during
					your conversation.
				</Typography>
			</ContentArea>
		),
		image: "/take-a-tour/Tour 3.png",
		alt: "Health check questionnaire page",
	},
	{
		content: (): ReactElement => (
			<ContentArea>
				<Title>Health Check results</Title>
				<Typography>
					This gives you and your client a snapshot of the health of their
					business. Each result links to the relevant Discover Topic.
				</Typography>
			</ContentArea>
		),
		image: "/take-a-tour/Tour 4.png",
		alt: "Health check results page",
	},
	{
		content: (): ReactElement => (
			<ContentArea>
				<Title>Discover Topics</Title>
				<Typography>
					Here your client can learn and understand information about cash
					flows. They can start to create action items using the Task Builder.
				</Typography>
			</ContentArea>
		),
		image: "/take-a-tour/Tour 5.png",
		alt: "Discover Topics landing page",
	},
	{
		content: (): ReactElement => (
			<ContentArea>
				<Title>The Cash Flow Canvas</Title>
				<Typography>
					The Canvas is a powerful visual and conversational tool. It helps your
					client better understand their cash flow.
				</Typography>
				<br />
				<Typography>
					You can complete it manually or import data from various accounting
					systems.
				</Typography>
			</ContentArea>
		),
		image: "/take-a-tour/Tour 6.png",
		alt: "Cash Flow Canvas form",
	},
	{
		content: (): ReactElement => (
			<ContentArea>
				<Title>Change Levers</Title>
				<Typography>
					Change Levers are potential business improvements and considerations.
				</Typography>
				<br />
				<Typography>
					Select the relevant ones with your client. You can test those
					scenarios back in the Canvas.
				</Typography>
			</ContentArea>
		),
		image: "/take-a-tour/Tour 7.png",
		alt: "Change Levers page",
	},
	{
		content: (): ReactElement => (
			<ContentArea>
				<Title>Action Checklist</Title>
				<Typography>
					The Action Checklist allows you to create and manage a list of things
					you need to complete.
				</Typography>
			</ContentArea>
		),
		image: "/take-a-tour/Tour 8.png",
		alt: "Action Checklist page",
	},
	{
		content: (): ReactElement => (
			<ContentArea>
				<Title>Client List</Title>
				<Typography>
					Here you&apos;ll find all your coaching sessions. This lets you switch
					clients and export your data. It also has coaching tips from
					professional advisors. These will help you in your coaching
					conversations.
				</Typography>
			</ContentArea>
		),
		image: "/take-a-tour/Tour 9.png",
		alt: "Client List page",
	},
	{
		content: (): ReactElement => (
			<ContentArea>
				<Title>Downloads</Title>
				<Typography>
					You can also download all the activities from the coaching session.
					Use these to reinforce ideas and actions with your client.
				</Typography>
			</ContentArea>
		),
		image: "/take-a-tour/Tour 10.png",
		alt: "Downloads page",
	},
	{
		content: (): ReactElement => (
			<ContentArea>
				<Title>Get started</Title>
				<Typography>
					Now you&apos;re ready to start a coaching session with your client!
					Click the &apos;Get Started&apos; button and enter a business name or
					import your data.
				</Typography>
			</ContentArea>
		),
		image: "/take-a-tour/Tour 11.png",
		alt: "Get started page",
	},
]

export default tourSteps
