import { expect, test } from "vitest";
import { getFutureDate } from "./get-future-date";

test("increases date with one year", () => {
  const year = new Date().getFullYear();

  expect(getFutureDate(`${year}-11-12`).getFullYear()).toEqual(year + 1);
});
