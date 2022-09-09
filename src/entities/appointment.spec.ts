import { expect, test } from "vitest";
import { getFutureDate } from "../tests/utils/get-future-date";
import { Appointment } from "./appointment";

test("create an appointment", () => {
  const startsAt = getFutureDate("2021-08-10");
  const endsAt = getFutureDate("2021-08-11");
  const appointment = new Appointment({
    customer: "John Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("John Doe");
});

test("cannot create an appointment with end date before start date", () => {
  const startsAt = getFutureDate("2021-08-10");
  const endsAt = getFutureDate("2021-08-09");

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});

test("cannot create an appointment with start date before now", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() - 1);
  endsAt.setDate(endsAt.getDate() + 3);

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
