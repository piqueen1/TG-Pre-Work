//8. Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Ranch Dressing');
console.log(condiments);

condiments = ['hello'];
console.log(condiments);

utensils.pop();
console.log(utensils);

utensils = ['Ranch Dressing'];

// elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.