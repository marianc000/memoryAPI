import { readFileSync, writeFileSync } from 'fs';

let text = readFileSync('text/specification.txt', 'utf8');

console.log(text.length);
text = text.repeat(50);
writeFileSync('text/1mb', text.substr(0, 10000000), 'utf8');
writeFileSync('text/2mb', text.substr(0, 20000000), 'utf8');
writeFileSync('text/5mb', text.substr(0, 50000000), 'utf8');

