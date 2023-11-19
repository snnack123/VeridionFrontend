/**
 * Merges classes into a single string
 */
export function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}