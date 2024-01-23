import { expect } from "chai"

import fizzBuz from "../wb/4-fizz-buz.js"

describe("Fizz buzz", () => {
    it("Should return array of numbers that are divisible by 3 or 5 but not both", () => {
        expect(fizzBuz(20)).to.have.members([3, 5, 6, 9, 10, 12, 18]);
        expect(fizzBuz(5)).to.have.members([3]);
        expect(fizzBuz(10)).to.have.members([3, 5, 6, 9])
    })
})