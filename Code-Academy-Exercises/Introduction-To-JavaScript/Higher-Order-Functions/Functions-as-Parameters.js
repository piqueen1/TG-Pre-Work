const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if ((2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (callbackFunc, callbackValue) => {
  let result1 = callbackFunc(callbackValue);
  let result2 = callbackFunc(callbackValue);
  if (result1 === result2) {
    return result1;
  } else {
    return 'This function returned inconsistent results';
  }
}

checkConsistentOutput(addTwo, 4);

// When we pass a function in as an argument to another function, we don't invoke it. Invoking the function would evaluate to the return value of that function call. 
