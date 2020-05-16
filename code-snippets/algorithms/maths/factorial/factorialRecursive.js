export default function factorialRecursive(num) {
  if (num < 2) {
    return 1;
  } else {
    return num * factorialRecursive(--num)
  }
}