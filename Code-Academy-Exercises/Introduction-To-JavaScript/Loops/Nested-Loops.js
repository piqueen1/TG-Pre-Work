//5. Nested for Loops
const myPlaces = ['Greece', 'East Africa', 'Russia'];
const friendPlaces = ['Greece', 'New Zealand', 'Scotland'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {

  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(friendPlaces[friendPlacesIndex]);
    }
  }
}

// For each round of the outer for loop, the inner for loop will run completely.
