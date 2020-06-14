// https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1


// solution 1 ::: O(n^2)
function SortArrayOf012sSol1(arr = []) {

  console.time("O(n^2) test");
  arr.sort();
  console.timeEnd("O(n^2) test");

  return arr;
}


// solution 2 ::: using Swapping O(2n) time
function SortArrayOf012sSol2(arr = []) {
  console.time("O(2n) test");
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      [arr[i], arr[k]] = [arr[k], arr[i]];
      k++;
    }
  }

  for (let i = k; i < arr.length; i++) {
    if (arr[i] === 1) {
      [arr[i], arr[k]] = [arr[k], arr[i]];
      k++;
    }
  }
  console.timeEnd("O(2n) test");

  return arr;
}

function init() {
  const arr = [0,2,1,2,0];
  const sol1 = SortArrayOf012sSol1(JSON.parse(JSON.stringify(arr)));
  const sol2 = SortArrayOf012sSol2(JSON.parse(JSON.stringify(arr)));
  console.log(sol1);
  console.log(sol2);
}

init();