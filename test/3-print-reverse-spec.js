import { expect } from "chai"

import printReverse from "../wb/3-print-reverse.js"

describe("Print in reverse order", () => {
    it("Should return array of logs in descending order", () => {
        expect(printReverse(5, 15)).to.have.members([14, 13, 12, 11, 10, 9, 8, 7, 6]);
        expect(printReverse(1, 5)).to.have.members([4, 3, 2]);
        expect(printReverse(13, 18)).to.have.members([17, 16, 15, 14]);
        expect(printReverse(-3, 3)).to.have.members([2, 1, 0, -1, -2]);
        expect(printReverse(90, 94)).to.have.members([93, 92, 91])
    })
})