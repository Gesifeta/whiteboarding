import { expect } from "chai"

import logBetweenStepper from "../wb/2-log-between-stepper.js"

describe("Log between two numbers with stepper", () => {
    it("Should return array of numbers", () => {
        expect(logBetweenStepper(-10, 15, 5)).to.have.members([-10, -5, 0, 5, 10, 15]);
        expect(logBetweenStepper(5, 9, 1)).to.have.members([5, 6, 7, 8, 9]);
        expect(logBetweenStepper(-10, 15, 5)).to.have.members([-10, -5, 0, 5, 10, 15])
    })
})