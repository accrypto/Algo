function countVowels(str) {
    const vowels = 'aeiou';
    const strToArr = str.split('')
    let counter = 0;
    
    strToArr.forEach(element => {
        if(vowels.indexOf(element.toLowerCase()) > -1) {
            counter++;
        }
    });

    return counter;
}

console.log(countVowels('How many vowels are here.'))