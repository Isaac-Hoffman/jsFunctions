function sayHello ()
{
    console.log("Something silly and bye!");
}
sayHello();

function sayHola()
{
    let hi = "Hola silly"
    return hi;
}
let message = sayHola()
console.log(message);

function howzit()
{
    let hi = "howzit"
    return hi;
    console.log("I will not print")
}
console.log(howzit());

function sayAloha(name)
{
    const message = `Aloha, ${name}!`;
    return message;
}

console.log(sayAloha("Lilo"));
console.log(sayAloha("Stitch"));
