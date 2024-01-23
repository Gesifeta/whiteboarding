import { expect } from "chai"

import reverseHyphenString from "../wb/10-reverse-hyphen-string.js"

describe("Reverse hyphenated string", () => {
    it("Should return the hyphenated string reversed.", () => {
        expect(reverseHyphenString("Go-to-the-store")).to.equal("store-the-to-Go");
        expect(reverseHyphenString("Jump,-jump-for-joy")).to.equal("joy-for-jump-Jump,");
    })
})