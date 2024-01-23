import { expect } from "chai"
import intersect from "../wb/11-intersect.js"

describe("Array intersect", () => {
    it("Should returns a new array containing the elements common to both", () => {
        expect(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])).to.have.members(['b', 'd']);
        expect(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])).to.have.members([])
        expect(intersect(['a', 'b', 'f', 'c', 'd'], ['b', 'd', 'e', 'f'])).to.have.members(['b', 'f', 'd']);
    })
})