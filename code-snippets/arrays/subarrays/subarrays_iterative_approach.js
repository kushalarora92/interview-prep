/**
 * Complexity: O(n3)
 * Approach: https://www.geeksforgeeks.org/subarraysubstring-vs-subsequence-and-programs-to-generate-them/
 * */ 

init();

function init() {
  const arr = [1,2,3,4];
  const subArr = findAllSubArraysUsingIterativeApproach(arr, arr.length);
  // subArr.map(a => console.log(a));
  console.log(...subArr);
}

function findAllSubArraysUsingIterativeApproach(arr, n) {
  const allSubArrays = [];
  
  // pick starting point
  for (let i = 0; i < n; i++) {

    // pick end point
    for (let j = i; j < n; j++) {

      // pick subarray between start index and end index
      const subArr = [];
      for (let k = i; k <= j; k++) {
        subArr.push(arr[k]);
      }
      allSubArrays.push(subArr);
    }
  }
  
  return allSubArrays;
}