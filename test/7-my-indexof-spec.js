import { expect } from "chai"

import myIndexOf from "../wb/7-my-indexof.js"

describe("My indexOf", () => {
    it("Should return the then index of a given  value", () => {
        expect(myIndexOf([1, 2, 3, 4], 4)).to.equal(3);
        expect(myIndexOf([5, 6, 7, 8], 2)).to.equal(-1);
        expect(myIndexOf([1, 2, 3, 4], 3)).to.equal(2);
    })
})