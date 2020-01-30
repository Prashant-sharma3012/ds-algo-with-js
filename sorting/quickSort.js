
const pivot = (arr, start, end) => {  
  let pivot = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[start] > arr[i]) {
      pivot++;
      [arr[pivot], arr[i]] = [arr[i], arr[pivot]]
    }
  }

  if (pivot !== start) {
    [arr[pivot], arr[start]] = [arr[start], arr[pivot]]
  }
  
  return pivot;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndx = pivot(arr, left, right)
    // left part
    quickSort(arr, left, pivotIndx - 1)
    // right part
    quickSort(arr, pivotIndx + 1, right)
  }

  return arr;
}