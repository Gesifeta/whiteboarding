import { expect } from "chai";

import logBetween from "../wb/1-log-between.js";

describe("Log between two numbers", () => {
    it("Should return array of numbers", () => {
        expect(logBetween(5, 10)).to.have.members([5, 6, 7, 8, 9, 10]);
        expect(logBetween(14, 10)).to.have.members([]);
        expect(logBetween(4, 6)).to.have.members([4, 5, 6]);
        expect(logBetween(-5, 10)).to.have.members([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
})