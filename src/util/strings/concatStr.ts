/**
 * HOF to concat different strings together
 *
 * @param {string} s
 * @returns {StrToStrHOF}
 */
function concatStr(s: string): StrToStrHOF {
	return (x: string): string => x.concat(s)
}

export default concatStr
