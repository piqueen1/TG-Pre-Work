//6. while Loops
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);

  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log('I found a Spade!');

// In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.
