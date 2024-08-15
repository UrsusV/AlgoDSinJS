function mergeSort(arr) 
{
    if (arr.length <= 1) { // Base case
        return arr;
    }

    const mid = Math.floor(arr.length / 2); // Spliting the array into two halves
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = mergeSort(left); // Recursively sorting both halves
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);//merging the sorted halves
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

let a = [38, 27, 43, 3, 9, 82, 10]; // use case array 
console.log("Sorted array: ", mergeSort(a));