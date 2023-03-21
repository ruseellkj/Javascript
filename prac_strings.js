const sentence = 'the quick brown fox jumps over the lazy dog'
const word = 'fox'
// usage of the template literal
console.log(`The word ${word} ${sentence.includes(word) ? 'is' : " is not"} in the sentence`)
console.log(sentence.startsWith('th'))
console.log(sentence.endsWith('ogg'))