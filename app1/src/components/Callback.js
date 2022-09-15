import React,{useState} from 'react'

function Callback({Callback}) {
    const[color,setColor]=useState();
    const handleChange=(e)=>{
        const {value}=e.target
        setColor(value)
Callback(value)
    }
  return (

    <div>
      <input type="text" onChange={handleChange} value={color}/>
      
    </div>
  )
}

export default Callback
