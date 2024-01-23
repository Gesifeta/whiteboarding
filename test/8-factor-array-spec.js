import { expect } from "chai"
import factorArray from "../wb/8-factor-array.js"

describe("An array of factors ", () => {
    it("Should return an array of all the factors.", () => {
        expect(factorArray([2, 3, 4, 5, 6], 20)).to.have.members([2, 4, 5]);
        expect(factorArray([2, 3, 4, 5, 6], 35)).to.have.members([5]);
        expect(factorArray([10, 15, 20, 25], 5)).to.have.members([]);
    })
})