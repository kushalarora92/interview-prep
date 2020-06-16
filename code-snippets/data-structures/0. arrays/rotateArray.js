function rotateArrayClockwise(arr, r) {
  // oldArr-->newArr with corresponding indexes below
  // [1,2,3,4,5,6,7,8,9,10] --> [4,5,6,7,8,9,10,1,2,3]
  // [0,1,2,3,4,5,6,7,8,9] ---> [7,8,9,0,1,2,3, 4,5,6]

  const rotArr = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const newIndex = (n-r+i)%n;
    rotArr[newIndex] = arr[i];
  }

  return rotArr;
}

function rotateArrayAntiClockwise(arr, r) {
  // oldArr-->newArr with corresponding indexes below
  // [1,2,3,4,5,6,7,8,9,10] --> [8,9,10,1,2,3,4,5,6,7]
  // [0,1,2,3,4,5,6,7,8,9] ---> [3,4,5, 6,7,8,9,0,1,2] 
  
  const n = arr.length;
  const newArr = [];
  for (let i = 0; i < n; i++) {
    const newIndex = (i+r)%n;
    newArr[newIndex] = arr[i];
  }

  return newArr;
}

const arr = [1,2,3,4,5,6,7,8,9,10]
const rotArrClockwise = rotateArrayClockwise(arr, 3);
console.log(rotArrClockwise);

const rotArrAntiClockwise = rotateArrayAntiClockwise(arr,3);
console.log(rotArrAntiClockwise);