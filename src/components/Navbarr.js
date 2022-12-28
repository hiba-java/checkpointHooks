import React from 'react'

const Navbarr = ({handleText,handleRate}) => {
const rateTab = ["1","2","3","4","5"]
  return ( 
  <div  className ="Nav">
      <input  onChange={(e)=> rateTab.includes(e.target.value) ? handleRate(e.target.value) :handleText(e.target.value)} type ="text"  placeholder='Type Your Filter ...'></input>
    </div>
  )
}

export default Navbarr
