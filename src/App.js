import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import  anime from "animejs";

function Test (){

    useEffect( () => {
        let a1 =  anime({
          targets: 'div.box.yellow',
            zIndex: -1,
          translateX: [
              {value: 300, duration: 1000},
              {value: 0, duration: 1000}
          ],
            easing : "linear"
        });
        let a2 =  anime({
          targets: 'div.box.green',
          translateX: [
              {value: -300, duration: 1000},
              {value: 0, duration: 1000}
          ],
            easing : "linear"
        });
        a1.play();
        a2.play();
    })

    return (
        <div className="wrapper">
            <div className="box yellow">1</div>
            <div className="box green">2</div>
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
