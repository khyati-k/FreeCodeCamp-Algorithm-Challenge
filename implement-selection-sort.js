const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}

const findSmallestIndex = (unsortedArr) => {
  let index = 0;
  let min = Infinity
  //traverse unsorted array
  for (let j = 0; j < unsortedArr.length; j++) {
    if (min > unsortedArr[j]) {
      min = unsortedArr[j];
      index = j;
    }
  }
  //compare each element with minValue
  //if lesser than minValue, update minValue
  return index;
}

function selectionSort(array) {
  // Only change code below this line
  for (let i = 0; i < array.length; i++) {
    //find smallest element in array
    let smallestIndex = findSmallestIndex(array.slice(i, array.length)) + i
    //find it's index
    swap(array, i, smallestIndex)
    //swap with ith element
  }

  return array;
  // Only change code above this line
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);