import React from 'react'
import { Link } from 'react-router-dom'

const Navbarr = ({handleText,handleRate}) => {
const rateTab = ["1","2","3","4","5"]
  return ( 
  <div  className ="Nav">
    <Link to='/'><h1>Home</h1></Link>
      <input  onChange={(e)=> rateTab.includes(e.target.value) ? handleRate(e.target.value) :handleText(e.target.value)} type ="text"  placeholder='Type Your Filter ...'></input>
    </div>
  )
}

export default Navbarr
