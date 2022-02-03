/**
 * 1. cut the string in half
 * 2. reverse the second half
 * 3. compare the two halves
 */

function isPalimndrome(word) {
    const len = word.length;
    const mid = Math.floor(len / 2);
    const start = word.substring(0, mid)
    const end = word.substring(len - mid)

    console.log(start, end)

    const reversedEnd = end.split('').reverse().join('')
    
    return start.toLowerCase() === reversedEnd.toLowerCase()
}

console.log('is kayak Palindrome', isPalimndrome('kayak'));