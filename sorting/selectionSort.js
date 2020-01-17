// Introduction - 
// 1) Lopp through the array 
// 2) compare all elements to find the smallest 
// 3) put smallest in first position 
// 4) repeat 2 and 3 foreach element from start to end

export const selectionSort = (data) => {
  let minPos = 0;
  for(let i = 0; i < data.length; i++){
    minPos = i;
    for(let j = i + 1; j < data.length; j++){
      if(data[minPos] > data[j]){
        minPos = j;
      }
    }
    if(i !== minPos){
      [data[i], data[minPos]] = [data[minPos], data[i]];
    }
  }

  return data;
}