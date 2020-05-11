/**
 * Complexity: O(N3)
 * Approach: https://www.geeksforgeeks.org/generating-subarrays-using-recursion/
 */

 init();

function init() {
  const arr = [1,2,3,4,5,6,7,8,9];
  const subArr = findAllSubArraysUsingRecursiveApproach(arr, 0, 0);
  subArr.map(a => console.log(a));
  // console.log(...subArr);
}

function findAllSubArraysUsingRecursiveApproach(arr, start, end, allSubArrays = []) {

  // stop if we have reached the end of array
  if (end === arr.length) { return; }

  // if start > end, increment end and start from 0
  else if (start > end) {
    findAllSubArraysUsingRecursiveApproach(arr, 0, end + 1, allSubArrays)
  }

  // find subarray & increment starting point
  else {
    const subArr = [];
    for (let i = start; i <= end; i++) {
      subArr.push(arr[i]);
    }
    allSubArrays.push(subArr);

    findAllSubArraysUsingRecursiveApproach(arr, start + 1, end, allSubArrays);
  }

  return allSubArrays;
}