import { MB } from './constants.js';

const history = [];

export function getHistory(){
    return history;
}

export async function printMemory(title) {
    return performance.measureUserAgentSpecificMemory()
        .then(obj => {
            const memoryMB = obj.bytes / MB;
            console.log(title, memoryMB.toFixed(3))
            history.push([title,memoryMB]);
        });
}


