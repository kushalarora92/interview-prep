// https://medium.com/better-programming/scope-vs-context-in-javascript-b31818f58558
// https://0.30000000000000004.com/
// https://dmitripavlutin.com/simple-but-tricky-javascript-interview-questions/


// Q1
var a = [1,2,3,4];
b= a;
console.log(b)

Array(4) [ 1, 2, 3, 4 ]

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

​

