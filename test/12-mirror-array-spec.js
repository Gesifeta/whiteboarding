import { expect } from "chai"
import mirrorArray from "../wb/12-mirror-array";

describe("Mirrored Array", () => {
    it("Should returns a new array  mirrored", () => {
        expect(mirrorArray([1, 2, 3])).to.equal([1, 2, 3, 3, 2, 1]);
        expect(mirrorArray(['a', 'b', 'c']).to.equal(["a", 'b', 'c', 'c', 'b', 'a']));
        expect(mirrorArray(['a', 'b', 'c', 'd'])).to.equal(['a', 'b', 'c', 'd', 'd', 'c', 'b', 'a']);
    })
})