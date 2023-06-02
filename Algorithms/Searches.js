// **************************************** Begin Linear search **************************************** :

function LinearSearch(array, valueTosearch) {
    let i = 0;
    let tester = false;
    while (i < array.length && !tester) {
        if (valueTosearch === array[i]) {
            tester = true;
        }
        i++;
    }
    return console.log(tester ? `${valueTosearch} is founded in postion ${i - 1}` : `${valueTosearch} not founded`);
}

// **************************************** End Linear search **************************************** :




// **************************************** Begin Binary Search **************************************** :

function BinarySearch(array, valueTosearch) {
    array.sort((a, b) => a - b);
    let long = array.length;
    middle = Math.floor(long / 2);
    while (middle >= 0 && middle < long) {
        if (valueTosearch === array[middle]) {
            return `${valueTosearch} exist at position ${middle}`;
        }
        if (valueTosearch > array[middle]) {
            middle = Math.floor((long + middle + 1) / 2);
        } else {
            middle = Math.floor(middle - 1 / 2);
        }
    }
    return `${valueTosearch} not exist`
}


// **************************************** End Binary Search **************************************** :




// **************************************** Begin Jump Search **************************************** :


function jumpSearch(arr, x, n) {
    // Finding block size to be jumped
    let step = Math.sqrt(n);
    // Finding the block where element is
    // present (if it is present)
    let prev = 0;
    for (let minStep = Math.min(step, n) - 1; arr[minStep] < x; minStep = Math.min(step, n) - 1) {
        prev = step;
        step += Math.sqrt(n);
        if (prev >= n)
            return -1;
    }

    // Doing a linear search for x in block
    // beginning with prev.
    while (arr[prev] < x) {
        prev++;
        // If we reached next block or end of
        // array, element is not present.
        if (prev == Math.min(step, n))
            return -1;
    }
    // If element is found
    if (arr[prev] == x)
        return prev;

    return -1;

}

// Driver program to test function
let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
let x = 55;
let n = arr.length;

// Find the index of 'x' using Jump Search
let index = jumpSearch(arr, x, n);

// Print the index where 'x' is located
document.write(`Number ${x} is at index ${index}`);


// **************************************** End Jump Search **************************************** :


// **************************************** Begin Interpolation Search **************************************** :


function InterpolationSearch(array, valueToSearch) {
    let low = 0;
    let high = array.length - 1;
    let pos;
    while (low <= high && valueToSearch >= array[low] && valueToSearch <= array[high]) {
        pos = low + Math.floor((valueToSearch - array[low]) * (high - low) / (array[high] - array[low]));
        if (array[pos] == valueToSearch) {
            return pos;
        }
        if (array[pos] < valueToSearch) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }
    return -1;
}


// **************************************** End Interpolation Search **************************************** :
