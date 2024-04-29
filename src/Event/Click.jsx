import React from 'react'

function Click(props) { 
    const handleName = (e) =>{
        console.log(props.name,e.target)
        e.target.innerText = props.name;
    }
  return (
    <div>
      <button onClick={handleName}>Clikle</button>
    </div>
  )
}

export default Click
