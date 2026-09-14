import { beforeEach, describe, expect, it } from "vitest";
import { usePrototypeStore } from "./prototype-store";

describe("usePrototypeStore", () => {
  beforeEach(() => {
    usePrototypeStore.setState({ count: 0, notes: "" });
  });

  it("increments and decrements the counter", () => {
    usePrototypeStore.getState().increment();
    usePrototypeStore.getState().increment();
    expect(usePrototypeStore.getState().count).toBe(2);

    usePrototypeStore.getState().decrement();
    expect(usePrototypeStore.getState().count).toBe(1);
  });

  it("resets the counter", () => {
    usePrototypeStore.getState().increment();
    usePrototypeStore.getState().reset();
    expect(usePrototypeStore.getState().count).toBe(0);
  });

  it("stores scratch notes", () => {
    usePrototypeStore.getState().setNotes("hello prototype");
    expect(usePrototypeStore.getState().notes).toBe("hello prototype");
  });
});
