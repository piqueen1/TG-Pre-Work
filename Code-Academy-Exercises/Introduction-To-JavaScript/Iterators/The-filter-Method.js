//4. filter()
let randomNumbers = [375, 200, 3.14, 7, 13, 852];

let smallNumbers = randomNumbers.filter(number => number < 250);


let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

// .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. 
