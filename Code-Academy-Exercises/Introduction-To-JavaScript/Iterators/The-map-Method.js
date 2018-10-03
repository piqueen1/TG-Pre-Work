//3. map()
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(animal =>
  animal[0]);

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

let smallNumbers = bigNumbers.map(function (number) {
  return number / 100;
});

// .map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.
