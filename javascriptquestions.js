// https://medium.com/better-programming/scope-vs-context-in-javascript-b31818f58558
// https://0.30000000000000004.com/
// https://dmitripavlutin.com/simple-but-tricky-javascript-interview-questions/


// Q1
// var a = [1,2,3,4];
var a = [{k:1}, {k:2}, {k:3}, {k:4}]
b= a;
console.log(b)
// CORRECT ANSWER -- // [{k:1}, {k:2}, {k:3}, {k:4}]

Array(4) [ 1, 2, 3, 4 ]

// Q2
// var a = [1,2,3,4];
var a = [{k:1}, {k:2}, {k:3}, {k:4}]
b= a;
b[1].k = 5;
console.log(a);
console.log(b);

// Array(4) [1,5,3,4]

// Q2
var a = [1,2,3,4];
b= a;
a = [9,8,7,6]
console.log(b)

Array(4) [ 1, 2, 3, 4 ]

// Q3
var a = [1,2,3,4];
b= a;
a[0] = 5
console.log(b)

Array(4) [ 5, 2, 3, 4 ]


// Q4
var a = 1;
function foo() {
    console.log(a);
    var a = 2;
    console.log(a)
}
console.log(a)
foo()
console.log(a)

1
undefined
2
1

// Q5
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}

 ****** https://dmitripavlutin.com/simple-but-tricky-javascript-interview-questions/  *****

/**
 * obsv vs Promise ?
 *  angular version diff ?
    aot vs jit ?
    ivy?

    convert const x = 10; to async operation;
    const x = await new Promise((resolve, reject) => {
        resolve(10);
    })
 */
