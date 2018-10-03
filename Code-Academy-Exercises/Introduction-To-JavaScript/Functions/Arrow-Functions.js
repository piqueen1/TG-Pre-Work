//9. Arrow Functions
const volumeOfSphere = (diameter) => {
  return (1 / 6) * Math.PI * diameter * diameter * diameter;
};

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

// you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this: