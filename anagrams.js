/**
 * 1. convert two strings to array
 * 2. sort the two arrays
 * 3. convert to string
 * 4. convert the string to lower case
 * 5. compare and return the result
 */


function isAnagram(str1, str2) {
    const sorted1 = str1.split('').sort().join('').toLowerCase();
    const sorted2  = str2.split('').sort().join('').toLowerCase();
    return sorted1 === sorted2
}

console.log('is helo and oleho anagram', isAnagram('helo', 'oleho'));
console.log('is helo and olej anagram', isAnagram('helo', 'olej'))
console.log('is world and roldw anagram', isAnagram('world', 'roldw'))