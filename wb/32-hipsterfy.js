import hipsterfyWord from "./31-hipsterfy-word.js";
const hipsterfy = (sentence) => {
    let words = sentence.split(" ");
    let newWord = '';
    for (let j = 0; j < words.length; j++) {
        newWord += " " + hipsterfyWord(words[j])
    }
    return newWord;
}
(hipsterfy("proper"));  // => "propr"
(hipsterfy("proper tonic panther"));  // => "propr tonc panthr"
(hipsterfy("towel flicker banana"));  // => "towl flickr banan"
(hipsterfy("runner anaconda"));  // => "runnr anacond"
(hipsterfy("turtle cheeseburger fries"));  // => "turtl cheeseburgr fris"