import React, { useEffect } from 'react';
import {gsap} from 'gsap';
// import insertSort from './utils/insertSort';
// import heapSort from './utils/heapSort';
// import quickSort from './utils/quickSort';
// import mergeSort from './utils/mergeSort';
import binarySearch from './utils/binarySearch';
import logo from './logo.svg';
import './App.css';

let Arr = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
console.log(binarySearch(2, Arr));

const arr = [
  { id: 1, name: "i1" },
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 8, name: "i8", parentId: 7 }
];
 
const getTree = (list: any[]) => {
  const result: any[] = [];
  
  const getNode = (id: number) => {
    let node: any[] = [];
    for(let i = 0; i < list.length; i ++){
      if(list[i].parentId === id) {
        node.push({
          ...list[i],
          children: getNode(list[i].id)
        })
      }
    }
    return node;
  }
  for(let i = 0; i < list.length; i++){
    const node = getNode(list[i].id);
    if(!list[i].parentId){
      result.push({
        ...list[i],
        children: node
      })
    }
    
  }
  return result;
}

console.log(getTree(arr));


const destCity = function(paths: any) {
  
};

const demo = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]];


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
