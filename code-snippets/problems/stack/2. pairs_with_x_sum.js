// Q3. find a pair of numbers in a given array whose sum would be x. (in min. time complexity. (min. space complexity would be a bonus point.))
// let arr = [1, 10, 11, 2,5, 7], x = 12
// ans = [1, 11] or [5, 7], [10,2]
// https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/

// 2 ways to solve -- 
  // 1. O(nlogn) using first & last element to check if their sum is less
  // 2. O(n) using extra space of hashmap to store difference


// with O(n) complexity

function getPairWithGivenSum(arr, x) {
  const map = {};
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    if (map[x-arr[i]] != null) {
      pairs.push([arr[i], x-arr[i]]);
    }
    map[arr[i]] = true;
  }
  return pairs;
}

// with O(nlogn) time complexity
function getPairWithGivenSumPointers(arr, x) {
  arr.sort();
  console.log(arr)
  const pairs = [];
  let l = 0, r = arr.length - 1;
  while(l < r) {
    console.log(l,r)
    // break;
    if (arr[l] + arr[r] === x) {
      pairs.push([arr[l], arr[r]]);
      l++;
    } else if (arr[l] + arr[r] < x ) {
      l++;
    }else {
      r--;
    }
  }

  return pairs;
}

console.log(getPairWithGivenSum([1,4,9,6], 10));
console.log(getPairWithGivenSumPointers([1,4,6,9], 10));
