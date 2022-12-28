import React from 'react'

function MovieCard ({card})  {
  const style1 = {display : "inline"}
  const styleLien = {display : "inline" , color:"red" ,textAlign:"Center"}
    return (
        <div className="Mcard">
      <img className = "Photo" src = {card.image}   alt = "photo"/>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      <h4 style={style1}> Rating : {card.rating}</h4> <br></br> <a style={styleLien} href={card.postUrl}>  Here is the trailer !</a>
    </div>
  )
}

export default MovieCard