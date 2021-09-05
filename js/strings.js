import { MB } from './constants.js';

export function makeString(mbs) {
    let str = 'X'.repeat(mbs * MB);
    str[0];
    return str;
}
 