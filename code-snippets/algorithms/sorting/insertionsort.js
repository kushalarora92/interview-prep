export default function insertionsort(arr = []) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i-1
    for (; j >= 0 && key < arr[j]; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = key;
  }

  return arr;
}