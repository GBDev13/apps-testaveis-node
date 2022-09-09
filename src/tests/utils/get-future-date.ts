import { setYear, parseISO } from "date-fns";

export function getFutureDate(date: string) {
  return setYear(parseISO(date), new Date().getFullYear() + 1);
}
