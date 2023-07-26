import { numbersToRomanNumerals } from "./roman_numerals";

describe("numbersToRomanNumerals", () => {
  test("Returns a Roman Numaral for 1,5,10,50,100,500,1000", () => {
    expect(numbersToRomanNumerals(1)).toBe("I");
    expect(numbersToRomanNumerals(5)).toBe("V");
    expect(numbersToRomanNumerals(10)).toBe("X");
    expect(numbersToRomanNumerals(50)).toBe("L");
    expect(numbersToRomanNumerals(100)).toBe("C");
    expect(numbersToRomanNumerals(500)).toBe("D");
    expect(numbersToRomanNumerals(1000)).toBe("M");
  });
  test("Returns a Roman Numaral of given ineger ( <=3 )", () => {
    expect(numbersToRomanNumerals(1)).toBe("I");
    expect(numbersToRomanNumerals(2)).toBe("II");
    expect(numbersToRomanNumerals(3)).toBe("III");
  });
  test("Returns a Roman Numaral of given ineger ( >=4 and <=8)", () => {
    expect(numbersToRomanNumerals(4)).toBe("IV");
    expect(numbersToRomanNumerals(5)).toBe("V");
  });
});
