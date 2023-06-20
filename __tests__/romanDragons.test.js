import dragonizer from "../src/romanDragons";

describe('dragonizer', () => {
  test("should return I if 1 is inputted", () => {
    expect(dragonizer(1)).toEqual("I");
  })
  
  test("should return II if 2 is inputted", ()=> {
    expect(dragonizer(2)).toEqual("II");
  })

  test('should return "" if 0 is inputted', ()=> {
    expect(dragonizer(0)).toEqual("");
  })

  test('should return "III" if 3 is put in', () => {
    expect(dragonizer(3)).toEqual("III");
  })

  test('should return "IV" if 4 is put in the hole', () => {
    expect(dragonizer(4)).toEqual("IV");
  })

  test('should return "V" if 5 is put in', () => {
    expect(dragonizer(5)).toEqual("V");
  })

  test('should return "VI" if 6 is put in', () => {
    expect(dragonizer(6)).toEqual("VI");
  })

  test('should return "VII" if 7 is put in', () => {
    expect(dragonizer(7)).toEqual("VII");
  })

  test('should return "VIII" if 8 is put in', () => {
    expect(dragonizer(8)).toEqual("VIII");
  })

  test('should return "IX" if 9 is put in', () => {
    expect(dragonizer(9)).toEqual("IX");
  })

  test('should return "X" if 10 is put in', () => {
    expect(dragonizer(10)).toEqual("X");
  });
});