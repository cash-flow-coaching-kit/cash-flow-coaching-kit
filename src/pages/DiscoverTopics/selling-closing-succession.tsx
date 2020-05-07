import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import { PrivatePage, PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import useDTStyles from "./_config/styles"

const DTSellingClosingSuccession = (): ReactElement => {
	const styles = useDTStyles()

	return (
		<PrivatePage>
			<PageContainer>
				<Typography
					variant="h5"
					component="h1"
					align="center"
					className={styles.tagline}
				>
					Selling, closing and succession planning
				</Typography>
				<Typography variant="body1" component="p">
					Most business owners will reach a time when they consider exiting
					their business. There are many reasons you may want to exit your
					business, including financial concerns, challenges around managing the
					business or personal reasons such as retirement.
				</Typography>
				<Typography variant="body1" component="p">
					Exiting your business can be a complex and emotional time. You can
					successfully navigate this process by seeking professional advice from
					your business advisor, accountant and/or solicitor, to understand your
					options and obligations.
				</Typography>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</PrivatePage>
	)
}

export default DTSellingClosingSuccession
