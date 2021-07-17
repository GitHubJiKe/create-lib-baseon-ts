import { getFullName, sayHello } from "../src";

test("should be Hello xiaoming", () => {
    expect(sayHello("xiaoming")).toBe("Hello xiaoming");
});

it("Fullname should be Yuan Peter", () => {
    expect(getFullName("Peter", "Yuan")).toEqual("Yuan Peter");
});
