import { expect } from "chai"

import isPrime from "../wb/5-is-prime.js"

describe("Is prime", () => {
    it("Should return true if the number is prime,otherwise false", () => {
        expect(isPrime(20)).to.equal(false);
        expect(isPrime(5)).to.equal(true);
        expect(isPrime(10)).to.equal(false);
        expect(isPrime(2)).to.equal(true);
        expect(isPrime(13)).to.equal(true);
        expect(isPrime(9)).to.equal(false);
    })
})