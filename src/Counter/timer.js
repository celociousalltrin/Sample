import {useState,useEffect} from "react";
import React from "react"

function Timer () {
    const [count,setCount] = useState (0)
let result;
    useEffect (()=> {
        console.log("Hello")
        setInterval(()=> {
            setCount((count)=> count+0.5);
        },1000);
        return ()=> clearInterval(result);
    },[]);


const Restart = () => {
    console.log("Restarting....")
    setCount(0);

}

const Stop = () => {
    console.log("Stoping...")
    
    clearInterval(result);

}
    return (
        <div>
       <h2 className="mb-3">Timer: {count}</h2>
       <button className="btn btn-sm btn-info mr-3" onClick={Restart}>Restart</button>
       <button className="btn btn-sm btn-warning" onClick={Stop}>Stop</button>
        </div>
    )
}

export default Timer;