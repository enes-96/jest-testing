import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from ".";

//test 1
test("capitalize first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("peace")).toBe("Peace");
  expect(capitalize("umbrella")).toBe("Umbrella");
});

//test 2
test("reverse given string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("elixir")).toBe("rixile");
  expect(reverseString("lit")).toBe("til");
});

//test 3
test("calculator works fine", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.divide(1, 2)).toBe(0.5);
  expect(calculator.multiply(1, 2)).toBe(2);
});

//test 3
test("shift letters down alphabet", () => {
  expect(caesarCipher("abc", 1)).toBe("BCD");
  expect(caesarCipher("monitor", 4)).toBe("QSRMXSV");
  expect(caesarCipher("madagaskar", 9)).toBe("VJMJPJBTJA");
});

//test 4
test("analyzing given arr", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toMatchObject({
    min: 1,
    max: 5,
    arrLength: 5,
    avr: 3,
  });
});
