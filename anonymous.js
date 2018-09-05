const hello = function(name){//anonymous function
    const message = `Hello, ${name}!`;
    return message;
}
console.log(hello("Dory"));

//fat arrow function =>
const aloha = (name) =>{
    console.log(name);
}
aloha("Nemo");

const howzit = name => `Howzit, ${name}!`;
console.log(howzit("Nani"));

console.log(Math.max(4.5, 5));
console.log(Math.pow(6, 3));
console.log(Math.sqrt(36));
console.log(Math.ceil(Math.random() * 10));