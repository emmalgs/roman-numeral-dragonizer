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
});