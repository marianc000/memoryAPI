import { printMemory, getHistory } from './memory.js';
import { makeString } from './strings.js';

function plot(data){
  import('./plot.js').then(({plot})=>plot(data));
}
 
runBtn.onclick = run;

let a, b, c;

function run() {
  console.log('wait until you see a chart');
  runBtn.disabled=true;
  printMemory('baseline')
    .then(() => {
      a = makeString(10);
      return printMemory('a = makeString(10)');
    })
    .then(() => {
      b = makeString(3);
      return printMemory('b = makeString(3)');
    })
    .then(() => {
      c = makeString(1);
      return printMemory('c = makeString(1)');
    })
    .then(() => {
      a = null;
      return printMemory('a = null');
    })
    .then(() => {
      b = null;
      return printMemory('b = null');
    })
    .then(() => {
      c = null;
      return printMemory("c = null");
    })
    .then(() => {
      plot(getHistory());
    });
}

