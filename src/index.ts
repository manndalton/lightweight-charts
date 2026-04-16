/**
 * @module lightweight-charts
 * Main entry point for the lightweight-charts library.
 * Exports all public API surface.
 */

export { createChart } from './api/create-chart';
export { createChartEx } from './api/create-chart-ex';

export { isBusinessDay, isUTCTimestamp } from './api/data-layer';

export type {
	IChartApi,
	MouseEventHandler,
	MouseEventParams,
	PaneSize,
} from './api/ichart-api';

export type {
	ISeriesApi,
	SeriesDataItemTypeMap,
	SeriesMarker,
	SeriesMarkerPosition,
	SeriesMarkerShape,
	SeriesOptionsMap,
	SeriesPartialOptionsMap,
	SeriesType,
} from './api/iseries-api';

export type {
	IPriceLine,
	IPriceLineApi,
} from './api/iprice-line';

export type {
	ITimeScaleApi,
	LogicalRange,
	LogicalRangeChangeEventHandler,
	SizeChangeEventHandler,
	TimeRangeChangeEventHandler,
} from './api/itime-scale-api';

export type { IPriceScaleApi } from './api/iprice-scale-api';

export type {
	BarData,
	BarPrice,
	BarSeriesOptions,
	BarStyleOptions,
} from './model/series-options';

export type {
	BusinessDay,
	Time,
	UTCTimestamp,
} from './model/horz-scale-behavior-time/types';

export type {
	ChartOptions,
	DeepPartial,
	HorzScaleBehavior,
	LayoutOptions,
	PriceScaleOptions,
	TimeScaleOptions,
} from './model/chart-model';

export type {
	LineData,
	LineSeriesOptions,
	LineStyleOptions,
	LineType,
	LineWidth,
} from './model/series-options';

export type {
	AreaData,
	AreaSeriesOptions,
	AreaStyleOptions,
} from './model/series-options';

export type {
	CandlestickData,
	CandlestickSeriesOptions,
	CandlestickStyleOptions,
} from './model/series-options';

export type {
	HistogramData,
	HistogramSeriesOptions,
	HistogramStyleOptions,
} from './model/series-options';

export type {
	BaselineData,
	BaselineSeriesOptions,
	BaselineStyleOptions,
} from './model/series-options';

export type {
	PriceLineOptions,
} from './model/price-line-options';

export type {
	CrosshairMode,
	CrosshairOptions,
} from './model/crosshair';

// Re-exporting enums as values so consumers don't need to import from deep paths
export { CrosshairMode } from './model/crosshair';
export { LineType } from './renderers/draw-line';
export { PriceScaleMode } from './model/price-scale';
export { TrackingModeExitMode } from './model/chart-model';
export { MismatchDirection } from './model/plot-list';
