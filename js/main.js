import { printMemory, getHistory } from './memory.js';
import { makeString } from './strings.js';
 

const source = JSON.parse('[["baseline",2.330229],["a = makeString(10)",12.349747],["b = makeString(3)",15.279981],["c = makeString(1)",16.307257],["a = null",6.302573],["b = null",3.283747],["c = null",2.295941]]');

function plot(data){
  import('./plot.js').then(({plot})=>plot(data));
}
 
runBtn.onclick = run;

let a, b, c;

function run() {
  console.log('wait until you see done')
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

