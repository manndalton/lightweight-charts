/**
 * Represents a UTC timestamp in seconds.
 */
export type UTCTimestamp = number & { readonly _brand: 'UTCTimestamp' };

/**
 * Represents a business day (year, month, day).
 */
export interface BusinessDay {
	/** The year, e.g. 2023. */
	year: number;
	/** The month, 1–12. */
	month: number;
	/** The day of the month, 1–31. */
	day: number;
}

/**
 * A time value that can be either a UTC timestamp or a business day.
 */
export type Time = UTCTimestamp | BusinessDay | string;

/**
 * Checks whether the given value is a {@link BusinessDay} object.
 */
export function isBusinessDay(value: Time): value is BusinessDay {
	return (
		typeof value === 'object' &&
		value !== null &&
		typeof (value as BusinessDay).year === 'number' &&
		typeof (value as BusinessDay).month === 'number' &&
		typeof (value as BusinessDay).day === 'number'
	);
}

/**
 * Checks whether the given value is a {@link UTCTimestamp}.
 */
export function isUTCTimestamp(value: Time): value is UTCTimestamp {
	return typeof value === 'number';
}

/**
 * Converts a {@link BusinessDay} to a string in the format `YYYY-MM-DD`.
 */
export function businessDayToString(businessDay: BusinessDay): string {
	const month = String(businessDay.month).padStart(2, '0');
	const day = String(businessDay.day).padStart(2, '0');
	return `${businessDay.year}-${month}-${day}`;
}

/**
 * Parses a string in the format `YYYY-MM-DD` into a {@link BusinessDay}.
 * Throws if the string is not a valid date.
 */
export function stringToBusinessDay(value: string): BusinessDay {
	const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
	if (match === null) {
		throw new Error(`Invalid date string: ${value}, expected format YYYY-MM-DD`);
	}
	return {
		year: parseInt(match[1], 10),
		month: parseInt(match[2], 10),
		day: parseInt(match[3], 10),
	};
}

/**
 * Converts any {@link Time} value to a UTC timestamp (seconds since epoch).
 * Business day strings and objects are treated as midnight UTC on that date.
 */
export function timeToIndex(time: Time): number {
	if (isUTCTimestamp(time)) {
		return time;
	}

	const bd: BusinessDay = isBusinessDay(time) ? time : stringToBusinessDay(time as string);
	return Date.UTC(bd.year, bd.month - 1, bd.day) / 1000;
}
