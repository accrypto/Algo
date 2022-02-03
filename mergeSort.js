function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const midIndex = Math.floor(array.length / 2);
    const leftArr = array.slice(0, midIndex);
    const rightArr = array.slice(midIndex);

    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );
}

function merge(leftArr, rightArr) {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];

        if (leftEl < rightEl) {
            output.push(leftEl)
            leftIndex++
        } else {
            output.push(rightEl)
            rightIndex++
        }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

const arr = [1, 6, 3, 7, 34, 32];
console.log(mergeSort(arr));