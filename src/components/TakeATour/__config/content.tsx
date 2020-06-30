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
				<Title>Coaching Model</Title>
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
					show you what they want guidance on and support those needs during
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
					business. Your results link to this relevant Discover Topics.
				</Typography>
			</ContentArea>
		),
		image: "/take-a-tour/Tour 4.png",
		alt: "Health check results page",
	},
]

export default tourSteps
