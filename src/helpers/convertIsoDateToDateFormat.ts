import { MediaList } from '../ts/media';
import { convertMonthToString } from './convertMonthToIsoString';

export function convertIsoDateToDateFormat(media: MediaList) {
	const start_date = new Date(media.start_date);
	const end_date = new Date(media.end_date as string);
	const start_date_year = start_date.getFullYear();
	const end_date_year = end_date.getFullYear();
	const start_date_month = convertMonthToString(start_date.getMonth());
	const end_date_month = convertMonthToString(end_date.getMonth());

	return {
		start_date_month,
		end_date_month,
		start_date_year,
		end_date_year,
	};
}
