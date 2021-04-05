import React from "react"

function Joke(){
  return (
    <div>
      <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
      <h3 style={{color: !props.question && "darkgreen"}}></h3>
      <hr />
    </div>
  )
}

export default Joke