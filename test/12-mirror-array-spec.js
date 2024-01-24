import { expect } from "chai"
import mirrorArray from "../wb/12-mirror-array.js";

describe("Mirrored Array", () => {
    it("Should returns a new array  mirrored", () => {
        expect(mirrorArray([1, 2, 3, 4])).to.have.members([1, 2, 3, 4, 4, 3, 2, 1]);
        expect(mirrorArray(['a', 'b', 'c', 'd'])).to.have.members(['a', 'b', 'c', 'd', 'd', 'c', 'b', 'a']);
        expect(mirrorArray(['a', 'b', 'c'])).to.have.members(['a', 'b', 'c', 'c', 'b', 'a']);
    })
})