export default function binarySearch(arr = [], num) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) { return mid; }
    else if (arr[mid] > num) { end = mid - 1; }
    else { start = mid + 1; }
  }

  return -1;
}