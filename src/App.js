import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import  anime from "animejs";

// let a1 =  anime({
        //   targets: 'div.box.yellow',
        //     zIndex: -1,
        //   translateX: [
        //       {value: 300, duration: 1000},
        //       {value: 0, duration: 1000}
        //   ],
        //     easing : "linear"
        // });
        // let a2 =  anime({
        //   targets: 'div.box.green',
        //   translateX: [
        //       {value: -300, duration: 1000},
        //       {value: 0, duration: 1000}
        //   ],
        //     easing : "linear"
        // });
        // a1.play();
        // a2.play();

function animetion(firstv, secondv, callN) {

        let element1 = document.querySelector(`[name="${firstv}"]`);
        let element2 = document.querySelector(`[name="${secondv}"]`);
        let a1 = anime({
            targets: element1,
            translateX : [{value: 300, duration: 700, delay : 2000}],
            easing : "linear",
            autoplay : "false"
        });

        let a2 = anime( {
            targets: element2,
            zIndex: -1,
            translateX : [{value: -300, duration: 700}],
            easing : "linear",
            autoplay : "false"
        });
        a2.pause();
        a1.play();
        // a1.pause();
        // a2.pause();

        // arr.push(a1, a2);
        // tl.add(a1).add(a2);
        // a1.play();
        // a2.play();
        // element1.name = (i + 1).toString();
        // element2.id = (i).toString();
}
const delay = (ms) => {
  const startPoint = new Date().getTime()
  while (new Date().getTime() - startPoint <= ms) {/* wait */}
}

let  animateArr = function ss(arr, startPoint) {

    if(startPoint*2 >= arr.length){
        return;
    } else {
        arr[startPoint * 2].play();
        arr[startPoint * 2 + 1].play();
        setTimeout(ss(arr, startPoint + 1), 800)
        return;
    }
}

function createConfig(){
    return {
        animationProps : []
    }
}

function animationConfig(animationKeyFrames) {
    const tl = anime.timeline({
        autoplay : false
    });
    // for(let i = 0; i < animationKeyFrames.length; i++){

        let element = document.getElementById((4).toString());
        let animation = {
            targets: element,
            translateX : animationKeyFrames[4],
            easing : "linear",
            autoplay : "false",
        };
        // tl.add(animation);

        anime(animation);

        console.log(animationKeyFrames[4], "here are frames");
    // }
    // tl.play();
}

const tl = anime.timeline({
        autoplay : false
    })

// function addToTimeLine({value, duration}) {
//
//
//
//     tl.add()
//
// }


async function animetedBubbleSort(inputArr){
    let arrLength = inputArr.length;
    let swapped;
    let animationKeyFrames = new Array(inputArr.length);

    let callN = 0;

    do {
        swapped = false;
        for(let i = 0; i < arrLength; i++){
            if(inputArr[i] > inputArr[i + 1] && inputArr[i + 1]){

                // addToTimeLine({value: '+=300', duration: 700}, i);
                //
                if(animationKeyFrames[i])
                    animationKeyFrames[i].push({value: '+=300', duration: 700, delay : callN * 700});
                else
                    animationKeyFrames[i] = [{value: '+=300', duration: 700, delay : callN * 700}];

                if(animationKeyFrames[i + 1])
                    animationKeyFrames[i + 1].push({value: '-=300', duration: 700, delay : callN * 700});
                else
                    animationKeyFrames[i + 1] = [{value: '-=300', duration: 700, delay : callN * 700}];

                callN++;
                // console.log(animationKeyFrames, "??", callN);
                console.log(inputArr[i], " -- ", inputArr[i + 1], ' || ', animationKeyFrames[i], " -- ", animationKeyFrames[i + 1]);
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;

            }
        }
    } while (swapped)
    animationConfig(animationKeyFrames);
    console.log(callN, "callN");
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
