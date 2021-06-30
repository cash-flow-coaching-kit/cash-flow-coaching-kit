import React, { ReactElement, memo, useCallback, MouseEvent } from "react"
import {
	Divider,
	Box,
	Typography,
	Button,
	makeStyles,
	Tooltip,
} from "@material-ui/core"
import InfoIcon from "@material-ui/icons/Info"
import Spacer from "../Spacer/Spacer"
import ComputedPanels from "../ComputedPanels"
import { addDollarSign, formatNumber } from "../../util/money/formatting"
import FormHeader from "./FormHeader"
import { RepeaterFormProps } from "./__config/shape"
import { useRepeaterStyles, useInputWrapper } from "./__config/styles"
import FormActions from "./FormActions"
import FormItem from "./FormItem"
import { CashFlow } from "../../data/_config/shape"
import useStyles from "../DescriptiveMoneyInput/__config/styles"
import MoneyInput from "../MoneyInput"

const useGSTStyles = makeStyles((theme) => ({
	root: {
		alignItems: "center",
	},
	manualBox: {
		display: "flex",
		alignItems: "center",
		"& > button": {
			marginRight: theme.spacing(1),
		},
	},
}))

const MANUAL_CALC_TOOLTIP =
	"If you choose to manually calculate the GST, you will lose the ability to change it back to automatically calculate the GST."

/**
 * Repeater form using for Cash Flow items
 *
 * @export
 * @param {RepeaterFormProps} {
 * 	name,
 * 	values,
 * 	onChange,
 * 	total,
 * 	gst,
 * 	addItem,
 * 	removeItem,
 * }
 * @returns {ReactElement}
 */
export default memo(
	({
		name,
		values,
		onChange,
		total,
		gst,
		addItem,
		removeItem,
		beforeTotalChild,
		manualGSTCalculation,
		setManualGSTCalc,
		gstName,
	}: RepeaterFormProps): ReactElement => {
		const cls = useRepeaterStyles()
		const wrapperCls = useInputWrapper()
		const dmiCls = useStyles({ mini: true, stacked: false })
		const gstCls = useGSTStyles()

		/**
		 * Method to remove a item from the form
		 *
		 * @param {CashFlow["id"]} id
		 * @returns {void}
		 */
		const removeFormItem = useCallback(
			(id: CashFlow["id"]) =>
				(e: MouseEvent<HTMLButtonElement>): void => {
					e.preventDefault()
					removeItem(id)
				},
			[removeItem]
		)

		const changeManualCalc = useCallback(() => {
			setManualGSTCalc(!manualGSTCalculation)
		}, [setManualGSTCalc, manualGSTCalculation])

		/**
		 * Checks if the add new button should be disabled
		 *
		 * @returns {boolean}
		 */
		const isAddDisabled = useCallback(
			() =>
				values.length >= 6 ||
				values.findIndex((item) => item.description === "") !== -1,
			[values]
		)

		return (
			<>
				<Box className={cls.body}>
					<Typography
						className={cls.mobileNotice}
						style={{ fontStyle: "italic" }}
					>
						It appears that you are using a mobile device. Remember to scroll to
						view the full form below
						<Spacer />
					</Typography>
					<Box className={cls.form}>
						<Box className={cls.formInner}>
							<FormHeader />
							{values.map((item, idx) => (
								<FormItem
									name={name}
									value={item}
									onChange={onChange}
									index={idx}
									key={item.id}
									removeItem={removeFormItem(item.id)}
								/>
							))}
						</Box>
					</Box>
					<Spacer />
					<FormActions addItem={addItem} addDisabled={isAddDisabled()} />
				</Box>
				{typeof beforeTotalChild !== "undefined" && (
					<>
						<Spacer />
						<Divider />
						<Spacer />
						{beforeTotalChild()}
					</>
				)}
				<Spacer />
				<Divider />
				<Spacer />
				<Box className={cls.body}>
					<ComputedPanels
						title="Total (exc GST)"
						wrapped={false}
						value={addDollarSign(formatNumber(`${total}`))}
					/>
					<Box
						className={`${wrapperCls.highlightLeft} ${cls.gst} ${dmiCls.root} ${gstCls.root}`}
					>
						<Box className={dmiCls.type}>
							<Typography variant="h6" component="p">
								GST
							</Typography>
							{!manualGSTCalculation && (
								<Box className={gstCls.manualBox}>
									<Button variant="outlined" onClick={changeManualCalc}>
										Calculate{" "}
										{manualGSTCalculation ? "Automatically" : "Manually"}
									</Button>
									<Tooltip title={MANUAL_CALC_TOOLTIP}>
										<InfoIcon color="primary" />
									</Tooltip>
								</Box>
							)}
						</Box>
						{manualGSTCalculation ? (
							<MoneyInput
								onChange={onChange}
								value={gst}
								name={gstName}
								variant="outlined"
								fullWidth={false}
							/>
						) : (
							<Typography variant="h6">
								{addDollarSign(formatNumber(`${gst}`))}
							</Typography>
						)}
					</Box>
				</Box>
			</>
		)
	}
)
