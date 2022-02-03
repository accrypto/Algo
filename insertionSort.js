function insertionSort(array) {
    for(let i=1; i < array.length; i++) {
        for(let j=i; j > 0; j--) {
            if(array[j] < array[j-1]) {
                [array[j], array[j-1]] = [array[j-1], array[j]];
            } else {
                break;
            }
        }
    }
    return array;
}

console.log(insertionSort([4, 6, 9, 3, 10]))