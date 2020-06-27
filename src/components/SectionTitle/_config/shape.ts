import {
	StandardProps,
	TypographyProps,
	TypographyClassKey,
} from "@material-ui/core"

export type SectionTitleProps = StandardProps<
	TypographyProps,
	TypographyClassKey
> & {
	component?: string
}
