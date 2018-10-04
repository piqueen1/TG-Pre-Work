var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

/* To specify that we are transpiling code from an ES6+ source, we have to add the following JavaScript object into .babelrc:

{
  "presets": ["env"]
}
*/