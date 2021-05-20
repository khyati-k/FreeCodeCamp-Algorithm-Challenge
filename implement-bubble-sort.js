const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function bubbleSort(array) {
  // Only change code below this line
  const sortedArray = array.slice()
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        swap(sortedArray, j, j + 1)
      }
    }
  }
  console.log(sortedArray)
  return sortedArray;
  // Only change code above this line
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);