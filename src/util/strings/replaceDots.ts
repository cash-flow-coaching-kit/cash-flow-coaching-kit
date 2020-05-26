/**
 * Replaces all the dots in a value with nothing
 *
 * @export
 * @param {string} s
 * @returns {string}
 */
export default function replaceDots(s: string): string {
	return s.replace(/[^0-9]/gm, "")
}
