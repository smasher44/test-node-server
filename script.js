import largeNumber from './script2.js';

const a = 4;
const b = 5;


setTimeout(() => {
  console.log('Sorry im late but this is the other value from other file', largeNumber);
}, 3000)

console.log(a + b + largeNumber);
