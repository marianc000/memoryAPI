import { MB } from './constants.js';

const history = [];
let previousTime;


export function getHistory(){
    return history;
}

export async function printMemory(title) {
    return performance.measureUserAgentSpecificMemory()
        .then(obj => {
            const memoryMB = obj.bytes / MB;
            const now=Date.now();
            console.log(title, memoryMB.toFixed(3),now-previousTime);
            history.push([title,memoryMB]);
            previousTime=now;
        });
}


