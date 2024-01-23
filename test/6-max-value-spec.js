import { expect } from "chai"

import maxValue from "../wb/6-max-value.js"

describe("Maximum value", () => {
    it("Should return the maximum value", () => {
        expect(maxValue([12, 6, 43, 2])).to.equal(43);
        expect(maxValue([12, 6, 1, 2])).to.equal(12);
        expect(maxValue([-4, -10, 0.43])).to.equal(.43);
        expect(maxValue([-4, -10, -1, -3])).to.equal(-1);
    })
})