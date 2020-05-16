export default function fibonacci(num) {
 // 0,1,1,2,3,5,...
 
 result = [0,1]
 for (let i = 2; i <= num; i++) {
  result[i] = result[i-1] + result[i-2];
 }

 return result[num];
}