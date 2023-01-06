import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

const Description = () => {
  const location=useLocation()
 const movie=location.state
 const navigate = useNavigate()
    return (
    <div>
        <h1 >{movie?.title}</h1>
        <img src={movie?.image} alt="jhjh" />
        <h3>Trailer</h3>
        
         {/* {trailer} */}
     
    </div>

    
  )
}

export default Description
