const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b]
    arr[b] = temp;
    return arr.join()
  }
  
  function permAlone(str) {
    let r = [str];
    let n = str.length;
    for (let i = 0; i < n; i++) {
      let tempr = r
      for (let j = 0; j < r.length; j++) {
        for (let k = i + 1; k < n; k++) {  
          tempr.push(swap(r[j].split('').slice(), i, k))
        }
      }
      r = [...r, ...tempr]
    }
    console.log(r)
  }
  
  permAlone('a');