import { expect } from "chai"
const { showAdults } = require("../wb/14-adults")

describe("Adults", () => {
    it("Should return an array containing the names of those who have an age of 18 or higher.", () => {
        const ppl = [
            { name: 'John', age: 20 },
            { name: 'Jim', age: 13 },
            { name: 'Jane', age: 18 },
            { name: 'Bob', age: 7 }
        ];
        const ppl2 = [
            { name: 'John', age: 10 },
            { name: 'Tom', age: 23 },
            { name: 'Jane', age: 18 },
            { name: 'Bob', age: 27 }
        ];
        expect(showAdults(ppl)).to.equal.apply(['John', 'Jane']);
        expect(showAdults(ppl2)).to.equal.apply(['Jim', 'Tom', 'Bob']);
    })
})