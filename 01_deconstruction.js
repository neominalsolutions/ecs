// object deconstruction (props), array construction (useState)

const person = { firstname: 'ali', surname: 'tan' }; // object literal
const { firstname, surname } = person;
console.log('name', firstname); // c# daki tupple kullanımına benzer

// array decontruction işlemi
const numbers = [1, 2, 3, 4];
const [firstIndex, secondIndex] = numbers;
console.log('number[0]', numbers[0]);
console.log('first', firstIndex);
