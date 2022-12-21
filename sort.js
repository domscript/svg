prepareObj(numbers) {
  const numObj = {}
  for (const [i,num] of numbers.entries()) {
    numObj[i] = num
  }
  return numObj;
}

  function mergeSort(numbers) {
  // If the array has fewer than 2 elements, it is already sorted
  if (numbers.length < 2) {
    return numbers;
  }

  // Split the array in half
  const middle = Math.floor(numbers.length / 2);
  const left = numbers.slice(0, middle);
  const right = numbers.slice(middle);

  // Recursively sort the two halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves back together and return the result
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];  // Create a new array to hold the merged elements
    
  // While there are elements in both arrays, compare the elements
  // and add the smaller one to the result array
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
     // console.l
      result.push(left.shift());
    } else {
      console.log(`Swapping ${left[0]} and ${right[0]}, left: ${left}, right: ${right}`);
      result.push(right.shift());
    }
  }

  // Add any remaining elements from the left array
  while (left.length > 0) {
    result.push(left.shift());
  }

  // Add any remaining elements from the right array
  while (right.length > 0) {
    result.push(right.shift());
  }

  return result;
}

mergeSort([4,6,8,5,9,2,1,5,3,7]);

console.log(prepareObj([4,6,8,5,9,2,1,5,3,7])
