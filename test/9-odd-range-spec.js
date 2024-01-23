import { expect } from "chai"

import oddRange from "../wb/9-odd-range.js"

describe("Odd ranges", () => {
    it("Should return the then odd array of a given  range", () => {
        expect(oddRange(13)).to.to.have.members([1, 3, 5, 7, 9, 11, 13]);
        expect(oddRange(6)).to.to.have.members([1, 3, 5]);
    })
})