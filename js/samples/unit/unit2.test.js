import { getAge } from "./unit2";

describe("getAGe UNit test SUites", () => {
  test('should render  "vous avez actuellement 31 ans"', () => {
    expect(getAge(31)).toBe("vous avez actuellement 31 ans");
  });
});
