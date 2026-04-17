/**
 * Price scale modes.
 */
export const enum PriceScaleMode {
	/** Normal linear scale */
	Normal = 0,
	/** Logarithmic scale */
	Logarithmic = 1,
	/** Percentage scale */
	Percentage = 2,
	/** Indexed to 100 scale */
	IndexedTo100 = 3,
}

/**
 * Price scale position on the chart.
 */
export type PriceScalePosition = 'left' | 'right' | 'none';

/**
 * Options for the price scale.
 */
export interface PriceScaleOptions {
	/** Price scale mode */
	mode: PriceScaleMode;
	/** Whether to invert the price scale */
	invertScale: boolean;
	/** Whether to align labels with the price scale */
	alignLabels: boolean;
	/** Border visibility */
	borderVisible: boolean;
	/** Border color */
	borderColor: string;
	/** Minimum scale length in pixels */
	minimumWidth: number;
	/** Whether the scale is auto-scaled */
	autoScale: boolean;
	/** Scale margins */
	scaleMargins: PriceScaleMargins;
	/** Whether to draw ticks on the price axis */
	drawTicks: boolean;
	/** Whether to show the price line */
	visible: boolean;
}

/**
 * Margins for the price scale (values between 0 and 1).
 */
export interface PriceScaleMargins {
	/** Top margin as a fraction of the chart height */
	top: number;
	/** Bottom margin as a fraction of the chart height */
	bottom: number;
}

/**
 * Default price scale options.
 */
export function defaultPriceScaleOptions(): PriceScaleOptions {
	return {
		mode: PriceScaleMode.Normal,
		invertScale: false,
		alignLabels: true,
		borderVisible: true,
		borderColor: '#2B2B43',
		minimumWidth: 0,
		autoScale: true,
		scaleMargins: {
			top: 0.2,
			bottom: 0.1,
		},
		drawTicks: true,
		visible: true,
	};
}

/**
 * Converts a price value to a coordinate (pixel) value given the scale parameters.
 *
 * @param price - The price value to convert.
 * @param minPrice - The minimum visible price.
 * @param maxPrice - The maximum visible price.
 * @param height - The height of the chart area in pixels.
 * @param mode - The price scale mode.
 * @returns The pixel coordinate corresponding to the price.
 */
export function priceToCoordinate(
	price: number,
	minPrice: number,
	maxPrice: number,
	height: number,
	mode: PriceScaleMode
): number {
	if (maxPrice === minPrice) {
		return height / 2;
	}

	if (mode === PriceScaleMode.Logarithmic) {
		const logMin = Math.log(Math.max(minPrice, Number.EPSILON));
		const logMax = Math.log(Math.max(maxPrice, Number.EPSILON));
		const logPrice = Math.log(Math.max(price, Number.EPSILON));
		return height - ((logPrice - logMin) / (logMax - logMin)) * height;
	}

	return height - ((price - minPrice) / (maxPrice - minPrice)) * height;
}
