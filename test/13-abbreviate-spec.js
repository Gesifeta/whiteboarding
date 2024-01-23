import {expect} from "chai"
const { intersect } = require("../wb/13-abbreviate")

describe("Abbreviate Array", () => {
    it("Should return a new sentence where words longer than 4 characters have their vowels removed", () => {
        expect(abbreviate('the bootcamp is fun')).to.equal('the btcmp is fun')
        expect(abbreviate('programming is fantastic')).to.equal('prgrmmng is fntstc');
        expect(abbreviate('hello world')).to.equal('hll wrld');
        expect(abbreviate('how are you')).to.equal('how are you');
    })
})