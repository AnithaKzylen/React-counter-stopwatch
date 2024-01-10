import React, { useState, useEffect } from 'react';

const Stopwatch = () => {

    const [time, setTime]= useState(0);
    const [running, setRunning] = useState(0);

    
    useEffect(() =>{
    let interval;


    if(running === true){
        interval = setInterval(() => {
            setTime((prevTime) => prevTime+10);
        }, 10);
    }

    else if (running === false){
        clearInterval(interval);
    }
    return  ()=> clearInterval(interval);
    }, [running]);
    
    return (
        <div>
            <div className="stopwatch">
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Pause</button>
            <button onClick={() => setTime(0)}>reset</button>

        </div>
    );
};

export default Stopwatch;