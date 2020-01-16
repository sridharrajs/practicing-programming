'use strict';

const term = 'AAAAABBBCCCCDDEEEE';
const freq = new Map();

for (let character of term.split('')) {
  if (freq.has(character)) {
    freq.set(character, freq.get(character) + 1);
  } else {
    freq.set(character, 1);
  }
}

let str = '';

freq.forEach((value, key) => {
  str = str + value + key;
});

console.log(str);
