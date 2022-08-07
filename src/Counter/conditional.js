import React from "react";
import {useState} from "react";
import Timer from "./timer"

const ConditionalRendering = () => {
const [logged,setLogged] = useState("true")

const handleChange = () => {
    setLogged (!logged)
}

const Show = () => {
    return (
        <div >
    <button className = "btn btn-success mb-5" 
    onClick = {handleChange}>Show</button>
        </div>
    )
}

const Hide = () => {
    return (
        <div>
    <button className = "btn btn-danger mb-5" 
    onClick = {handleChange}>Hide</button>
    <Timer />
        </div>
    )
}

    return (
        <div>
            {logged ? <Show /> : <Hide />}

        </div>
    )
}

export default ConditionalRendering;