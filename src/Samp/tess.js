import React from "react"
import {useState} from "react";

const ConditionalRendering = () => {
  const [isLogged,setIsLogged] = useState (true)

const handleClick = () => {
    setIsLogged (!isLogged)
  }
  
  function In () {
    return (
      <div>
      <button className = "btn btn-sm btn-success"
    onClick={handleClick}>Login</button>
    <h4>Welcome guest </h4>
    </div>
    )
  }
  

const Out = () => {
    return (
      <div>
      <button className = "btn btn-sm btn-danger"
  onClick={handleClick}>Logout</button>
  <h4>You are now logged in</h4>
  </div>

    )
}


  return (
  <>
{isLogged ? <In /> : <Out />}
  </>
  )
}

export default ConditionalRendering;




