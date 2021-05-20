const makePairs = (arr, sum) => {
  const pair = [];
  const visited = new Set();

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum && !visited.has(i) && !visited.has(j)) {
        pair.push([arr[i], arr[j], i + j])
        visited.add(i)
        visited.add(j)
      }
    }
  }
  return pair;
}


const pairwise = (arr, arg) => makePairs(arr.slice(), arg).reduce((acc, currentPair) => acc + currentPair[2], 0)


pairwise([1, 4, 2, 3, 0, 5], 7);