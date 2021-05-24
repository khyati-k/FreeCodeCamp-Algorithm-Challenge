function quickSort(array) {
  // Only change code below this line
  if (array.length <= 1) {
    return array;
  }

  let left = [], right = [];
  let pivot = array[array.length - 1];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > pivot) {
      right.push(array[i])
    } else {
      left.push(array[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
  // Only change code above this line
}