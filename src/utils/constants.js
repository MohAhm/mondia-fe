import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export const DATE_FORMAT = 'YYYY-MM-DD'
export const BASE_URL = 'http://localhost:3900/api'

export function toLocalDate(date) {
	return dayjs.utc(date).local()
}