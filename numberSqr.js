function square1(x) {
  let answer = (Math.pow(x, 2));
  return answer;
}

const square2 = x => `${x}`; 
console.log(square2(Math.pow(x, 2)));

console.log(square1(0)); 
console.log(square1(2)); 
console.log(square1(5)); 

console.log(square2(0)); 
console.log(square2(2)); 
console.log(square2(5)); 
