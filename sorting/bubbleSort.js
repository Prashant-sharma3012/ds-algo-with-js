// Introduction to bubble sort 
// 1) iterate through the length of array 
// 2) compare elements and swap if i > i + 1;
// 3) after first pass the largest value will reach the end 
// 4) repeat 2 and 3 for length - the iteration you are in starts at 0;

// complexity = best medium worst
// time - o(n^2) o(n^2) o(n^2)
// space - o(n) o(n) o(n)

export const bubbleSortWithForLoop = (data) => {
  let iteration = 0;
  swapped = true;

  // this is a short circuit cinditon in case we do not swp in a ninteration that means the array is sorted
  while (swapped) {
    swapped = false;
    for (let i = 0; i < data.length - iteration; i++) {
      if (data[i] > data[i + 1]) {
        // es5 way of swapping
        // let temp = data[i + 1];
        // data[i + 1] = data[i];
        // data[i] = temp;

        // es6 way of swapping
        [data[i], data[i + 1]] = [data[i + 1], data[i]]
        swapped = true;
      }
    }
    iteration++;
  }

  return data;
}


export const swapElements = (data, iteration, swapped) => {
  if (swapped) {
    swapped = false;

    for (let i = 0; i < data.length - iteration; i++) {
      if (data[i] > data[i + 1]) {
        [data[i], data[i + 1]] = [data[i + 1], data[i]]
        swapped = true;
      }
    }
    iteration++;
    swapElements(data, iteration, swapped)
  }

  return data;
}

export const bubbleSortWithRecursion = (data) => {
  let iteration = 0;
  swapped = true;

  return swapElements(data, iteration, swapped)
}

