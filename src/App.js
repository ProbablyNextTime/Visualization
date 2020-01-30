import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import  anime from "animejs";


const delay = (ms) => {
  const startPoint = new Date().getTime()
  while (new Date().getTime() - startPoint <= ms) {/* wait */}
}

async function animateBubbleSortStep(firstValueToMove, secondValueToMove){
    let element1 = document.querySelector(`[name="${firstValueToMove}"]`);
    let element2 = document.querySelector(`[name="${secondValueToMove}"]`);
    anime({
        targets: element1,
        translateX : {value: '+=300', duration: 700},
        easing : "linear"
    })

    await  anime({
        targets: element2,
        translateX : {value: '-=300', duration: 700},
        easing : "linear"

    }).finished;
}

async function animetedBubbleSort(inputArr){
    let arrLength = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < arrLength; i++){
            if(inputArr[i] > inputArr[i + 1] && inputArr[i + 1]){
                await animateBubbleSortStep(inputArr[i], inputArr[i + 1]);
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;

            }
        }
    } while (swapped)
    return inputArr;
}

let input = [5,7,2,13,8,1];

function Test (){

    useEffect( () => {
        console.log(animetedBubbleSort(input));
    })

    return (
        <div className="wrapper">
            <div className="box green" name="5" id="0">5</div>
            <div className="box green" name="7" id="1">7</div>
            <div className="box green" name="2" id="2">2</div>
            <div className="box green" name="13" id="3">13</div>
            <div className="box green" name="8" id="4">8</div>
            <div className="box green" name="1" id="5">1</div>
        </div>
    )
}


function App() {
  return (
    <div >
        <Test/>
    </div>
  );
}

export default App;
