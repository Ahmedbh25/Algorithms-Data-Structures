// **************************************** Begin Bubble Sort  **************************************** :

function bubbleSort(array) {
    let somethingChanged = true;
    while (somethingChanged) {
        somethingChanged = false;
        for (let j = 0; j < array.length; j++) {
            // (array[j] > array[j+1]) ascending order.
            // (array[j] < array[j+1]) descending order.
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                somethingChanged = true;
            }
        }
    }
    return array;
}

// **************************************** End Bubble Sort  **************************************** :


// **************************************** Begin Selection Sort  **************************************** :

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        swapping(arr, min_idx, i);
    }
    return arr;
}

function swapping(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// **************************************** End Selection Sort  **************************************** :



// **************************************** Begin Selection Sort  ****************************************

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        fixed = array[i];
        j = i - 1;
        while (j >= 0 && array[j] > fixed) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = fixed;
    }
}

// **************************************** End Selection Sort  **************************************** 


// **************************************** Begin Merge Sort  ****************************************

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, mid);
    const rightHalf = array.slice(mid);
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    while (leftIndex < left.length) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < right.length) {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
    }
    return mergedArray;
}

// **************************************** End Merge Sort  **************************************** 
