import { sayHello } from "./util.ts";

describe("sample test", () => {
  it("should work", () => expect(true).toBeTruthy());
  it("sayHello says hello", () => expect(sayHello("me")).toBe("Hello me!"));
});
