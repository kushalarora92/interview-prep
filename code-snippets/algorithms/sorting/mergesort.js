module.exports = function mergesort(arr) {
  // find mid & split arrays by mid
  // repeat above step until arr.length <=1

  if (arr.length <= 1) return arr;

  const mid = Math.ceil(arr.length / 2);
  
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(
    mergesort(left),
    mergesort(right)
  );
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0, rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}