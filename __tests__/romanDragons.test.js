import dragonizer from "../src/romanDragons";

describe ('dragonizer', ()=> {
    test("should return I if 1 is inputted", ()=>{
        expect(dragonizer(1)).toEqual("I");
    });

})