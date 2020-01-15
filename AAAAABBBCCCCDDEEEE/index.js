'use strict';

const term = 'AAAAABBBCCCCDDEEEE';
const characters = term.split('');
const uniqueCharacters = new Set(characters);

let str = '';
for(let character of uniqueCharacters){
  str = str + character + characters.filter(item => item === character).length;
}

console.log(str);