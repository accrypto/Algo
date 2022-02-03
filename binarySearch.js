/**
 * 1. intialize lower and upper boundery
 * 2. loop while lower < upper
 * 3. initialize middle index to lower + average
 * 4. if value < middle element then shift upper index to middle index - 1
 * 5. if value > middle element then shift lower index to middle index + 1
 * 6. if value == middle element then return middle index
 * 7. if value is not found then simply return -1
 */

// will return the index of the element using binary search
function binarySearch(array, val) {
    let lower = 0;
    let upper = array.length - 1;

    while (lower < upper) {
        let midIndex = lower + Math.floor(upper - lower / 2)
        // midIndex = 2

        if(val < array[midIndex]) {
            upper = midIndex - 1;
        } else if( val > array[midIndex]) {
            lower = midIndex + 1;
        } else {
            return midIndex
        }
    }
    return -1;
}

const array = [1, 2, 3, 5, 6, 8] //sorted
console.log(binarySearch(array, 3))