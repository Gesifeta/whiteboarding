import { expect } from "chai"
const { countScores } = require("../wb/15-count-scores-spec")

describe("Count score", () => {
    it("Should return an object that has key-value pairs where each name is a key and the value is their total score", () => {
        const ppl = [
            { name: "Anthony", score: 10 },
            { name: "Fred", score: 10 },
            { name: "Anthony", score: -8 },
            { name: "Winnie", score: 12 }
        ];
        expect(countScores(ppl)).to.equal({ Anthony: 2, Fred: 10, Winnie: 12 })

        // Example 2
        const peeps = [
            { name: "Anthony", score: 2 },
            { name: "Winnie", score: 2 },
            { name: "Fred", score: 2 },
            { name: "Winnie", score: 2 },
            { name: "Fred", score: 2 },
            { name: "Anthony", score: 2 },
            { name: "Winnie", score: 2 }
        ];

        expect(countScores(peeps)).to.equal({ Anthony: 4, Fred: 4, Winnie: 6 })
    })
})