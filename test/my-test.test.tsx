import { test, expect } from "vitest";

test("test", () => {
  let assertCount = 0;
  const myEventType = "my-event" as const;

  const element = document.createElement("div");
  element.addEventListener(myEventType, () => {
    assertCount++;
  });

  expect(() =>
    element.dispatchEvent(new window.CustomEvent(myEventType))
  ).not.toThrowError();

  expect(assertCount).toBe(1);
});
