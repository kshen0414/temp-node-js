const {readFileSync, writeFileSync } = require('fs');

const first = readFileSync('../content/first.txt','utf-8');  // default is utf-8
const second = readFileSync('../content/second.txt','utf-8');  // default is utf-8

console.log(first,second);

writeFileSync(
    '../content/result-sync.txt',`The result : ${first}, ${second}\n`,
    {flag: 'a'}
);