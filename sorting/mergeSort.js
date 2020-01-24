// introduction - 
// 1) split the input array into elements of 1 
// 2) start merging the arrays back
// 3) when merging 2 arrays make sure the output is sorted
// 4) repeat 2 and 3 until all arrays are merged

// [5,3,13,4,11,1,2,10,6,7]

const merge = (a1, a2) => {
  let merged = [];
  while (a1 && a2 && a1.length > 0 && a2.length > 0) {
    if (a1[0] <= a2[0]) {
      merged.push(a1[0]);
      a1 = a1.slice(1)
    } else {
      merged.push(a2[0]);
      a2 = a2.slice(1)
    }
  }

  while (a1 && a1.length > 0) {
    merged.push(a1[0]);
    a1 = a1.slice(1)
  }

  while (a2 && a2.length > 0) {
    merged.push(a2[0]);
    a2 = a2.slice(1)
  }

  return merged
}

const mergeSort = (data) => {
  if (data.length <= 1) return data;

  let mid = Math.floor(data.length / 2);
  let left = mergeSort(data.slice(0, mid));
  let right = mergeSort(data.slice(mid));

  return merge(left, right);
}
