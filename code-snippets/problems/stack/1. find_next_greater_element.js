// Q2. find the next greater element for all elements of a given array.
let arr = [-5, 40, 13, 29, 30, 50, 11, 12];
// stack [40]
// https://www.geeksforgeeks.org/next-greater-element/

class Stack {
  constructor() {
    this.top = -1;
    this.list = [];
  }

  get length() {
    return this.top + 1;
  }

  isEmpty() {
    return this.top === -1;
  }

  push(val) {
    this.list[++this.top] = val
    return ;
  }

  pop() {
    if (this.isEmpty()) { return null; }
    const pop = this.list[this.top];
    this.top = this.top - 1;
    return pop;
  }
}

function findnextGreater(arr) {
  const s = new Stack();
  // s.top = -1;
  const map = {};

  s.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const next = arr[i];

    if (!s.isEmpty()) {
      let el = s.pop();
      
      while (el < next) {
        map[el] = next;
        // console.log(`${el} -> ${next}`)
        if (s.isEmpty()) {
          break;
        }
        el = s.pop();
      }

      if (el > next) {
        s.push(el);
      }
    }

    s.push(next);
  }

  while(!s.isEmpty()) {
    const el = s.pop();
    map[el] = -1;
    // console.log(`${el} -> -1`);
  }

  return map;
}

console.log(findnextGreater(arr));