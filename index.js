// 1.

const arr = [1, 3, 2, -3]

let answer = 'false'
for (let i = 0; i < arr.length; i++){
    for(let  j = 0; j <arr.length;  j++){
        if (i !== j){
            if (arr[i] + arr[j] === 0) {
                answer = 'true'
            }
        }
    }
}

console.log(answer)

// Runtime: 
// time => O(n^2)
// space => O(1)

// 2.

const uniqueCharacters = word => {
    let unique = new Set([])
    for(let i = 0; i < word.length; i++){
        unique.add(word[i])
    }
    return unique.size === word.length
}

console.log(uniqueCharacters('Monday'))
console.log(uniqueCharacters('Moonday'))

// Runtime: 
// time => O(n)
// space => O(n)

// 3.  

const pangrams = s => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
    
    for(let i = 0; i < alphabet.length; i++){
        if(lowercase.indexOf(alphabet[i]) === -1){
            return "not pangram";
        }
    }
    
    return "pangram";
}

console.log(pangrams("The quick brown fox jumps over the lazy dog!"))
console.log(pangrams("I like cats, but not mice"))

// Runtime: 
// time => O(n)
// space => O(n)

// 4.

// const findLongestWord = str => {
//     let longestWord = str.split(' ').reduce(function(longest, currentWord) {
//         return currentWord.length > longest.length ? currentWord : longest;
//     }, "");
//     return longestWord.length;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))

const findLongestWord = arr => {
    let result = 0
    arr.forEach(word => {
        if (word.length > result) {
            result = word.length
        }
    })
    return result
}

console.log(findLongestWord(["hi", "hello"]))

// Runtime: 
// time => O(n)
// space => O(1)