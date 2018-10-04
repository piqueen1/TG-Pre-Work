//4. module.exports II
let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function () {
    return this.myAirplane;
  }
};

// We can also wrap any collection of data and functions in an object, and export the object using module.exports.
