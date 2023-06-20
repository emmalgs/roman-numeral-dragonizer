import dragonizer from "../src/romanDragons";

describe('dragonizer', () => {
  test("should return I if 1 is inputted", () => {
    expect(dragonizer(1)).toEqual("I");
  });
  
  test("should return II if 2 is inputted", ()=> {
    expect(dragonizer(2)).toEqual("II");
  });

  test('should return "" if 0 is inputted', ()=> {
    expect(dragonizer(0)).toEqual("");
  });

  test('should return "III" if 3 is put in', () => {
    expect(dragonizer(3)).toEqual("III");
  });

  test('should return "IV" if 4 is put in the hole', () => {
    expect(dragonizer(4)).toEqual("IV");
  });

  test('should return "V" if 5 is put in', () => {
    expect(dragonizer(5)).toEqual("V");
  });

  test('should return "VI" if 6 is put in', () => {
    expect(dragonizer(6)).toEqual("VI");
  });

  test('should return "VII" if 7 is put in', () => {
    expect(dragonizer(7)).toEqual("VII");
  });

  test('should return "VIII" if 8 is put in', () => {
    expect(dragonizer(8)).toEqual("VIII");
  });

  test('should return "IX" if 9 is put in', () => {
    expect(dragonizer(9)).toEqual("IX");
  });

  test('should return "X" if 10 is put in', () => {
    expect(dragonizer(10)).toEqual("X");
  });

  test('should return "XI" if 11 is put in', () => {
    expect(dragonizer(11)).toEqual("XI");
  });
  
  test('should return "XII" if 12 is put in', () => {
    expect(dragonizer(12)).toEqual("XII");
  });

  test('should return "XIII" if 13 is put in', () => {
    expect(dragonizer(13)).toEqual("XIII");
  });

  test('should return "XIV" if 14 is put in', () => {
    expect(dragonizer(14)).toEqual("XIV");
  });

  test('should return "XV" if 15 is put in', () => {
    expect(dragonizer(15)).toEqual("XV");
  });
  test('should return "XVI" if 16 is put in', () => {
    expect(dragonizer(16)).toEqual("XVI");
  });
  test('should return "XVII" if 17 is put in', () => {
    expect(dragonizer(17)).toEqual("XVII");
  });
  test('should return "XVIII" if 18 is put in', () => {
    expect(dragonizer(18)).toEqual("XVIII");
  });
  test('should return "XIX" if 19 is put in', () => {
    expect(dragonizer(19)).toEqual("XIX");
  });
  test('should return "XX" if 20 is put in', () => {
    expect(dragonizer(20)).toEqual("XX");
  });
  test('should return "XXIV" if 24 is put in', () => {
    expect(dragonizer(24)).toEqual("XXIV");
  });
});