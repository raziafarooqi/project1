import React,{useState} from 'react'
import './Colorful.css';
import Callback from './components/Callback';
function ColorFul() {
  const[color,setColor]=useState('');
  const getColor=(val)=>{
    setColor(val)
  }
  return (
    <div>
      <div className='container' style={{backgroundColor:`${color}`}}></div>
      <Callback Callback={getColor}/>
    </div>
  )
}

export default ColorFul
