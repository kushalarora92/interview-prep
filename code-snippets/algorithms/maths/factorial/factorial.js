export default function factorial(num = 0) {
  // pre : num whhose factorial needs to be find
  // post: factorial of num is given
  let i = num,
    factorial = 1;
  while (i > 1) {
    factorial *= i;
  }

  return factorial;
}