//2. module.exports
let Airplane = {};

Airplane.myAirplane = "StarJet";

module.exports = Airplane;

//3. require()
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();

/* The pattern we use to export modules is thus:

Define an object to represent the module.
Add data or behavior to the module.
Export the module.
*/
