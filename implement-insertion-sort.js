const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]]
  console.log(arr)
}

function insertionSort(array) {
  // Only change code below this line
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1)
      }
    }
  }
  return array;
  // Only change code above this line
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);