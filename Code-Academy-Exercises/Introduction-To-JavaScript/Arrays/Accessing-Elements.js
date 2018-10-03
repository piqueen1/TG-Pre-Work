//3. Property Access
let newYearsResolutions = ['exercise more', 'take horseback riding lessons', 'learn Javascript'];
console.log(newYearsResolutions);

const listItem = newYearsResolutions[0];
console.log(listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);

newYearsResolutions[1] = 'Learn a new language';
console.log(newYearsResolutions.length);

newYearsResolutions.push('Climb a mountain', 'Play on the ground with the girls more');
console.log(newYearsResolutions);

newYearsResolutions.pop();
console.log(newYearsResolutions);

// We can access individual items using their index