// introduction
// 1) loop through the array 
// 2) take each element and put it in the right place in first half of the array 
// 3) repeat step 2 till end
// why name insertion becasue at each iteration you insert the elemet at its place in sorted array

// [5,3,4,1,2]
// [3,5,4,1,2]
// [3,4,5,1,2]
// [1,3,4,5,2]
// [1,2,3,4,5]

const insertionSort = (data) => {
  for (let i = 1; i < data.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (data[j] < data[j - 1]) {
        [data[j], data[j-1]] = [data[j-1], data[j]]
      }
    }
  }
  return data;
}