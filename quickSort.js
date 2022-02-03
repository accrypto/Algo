function quickSort(array) {
    if(array.length <= 1) {
        return array
    }

    const pivot = array[array.length -1];
    const leftArr = [];
    const rightArr = [];

    for(const el of array.slice(0, array.length - 1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el);
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

console.log(quickSort([2, 4, 7, 3, 87, 454, 234]));