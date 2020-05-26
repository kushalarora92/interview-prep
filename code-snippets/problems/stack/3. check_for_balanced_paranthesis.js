class Stack {
  constructor() {
    this.top = -1;
    this.list = [];
  }

  isEmpty() {
    return this.top === -1;
  }

  push(val) {
    this.list[++this.top] = val;
  }

  pop() {
    if (this.top === -1) { return; }
    
    const el = this.list[this.top--];
    return el;
  }

  peek() {
    if (this.top === -1) return;
    return this.list[this.top];
  }

  get length() { return this.top + 1; }
}

class BalancedParanthesis {
  constructor() {
  }

  isBalanced(str) {
    const stack = new Stack();
    for (let i = 0; i < str.length; i++) {
      const el = str[i];
      if (['{','(','['].includes(el)) {
        stack.push(el);
      } else if (['}',')',']'].includes(el)) {
        const pop = stack.pop();
        if (!this.isPair(pop,el)) return false; 
      }
    }

    return stack.isEmpty();
  }

  isPair(el1,el2) {
    const arr = ['{}','[]','()'];
    const fltrArr = arr.filter(a => {
      return a[0] === el1 && a[1] === el2
    });

    return fltrArr.length > 0;
  }
}

const bp = new BalancedParanthesis();
console.log(
  bp.isBalanced('[](){}')
);