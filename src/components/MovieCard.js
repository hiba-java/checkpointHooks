import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function MovieCard({ card }) {
  const navigate = useNavigate();
  const style1 = { display: "inline" }
  const styleLien = { display: "inline", color: "red", textAlign: "Center" }
  return (
    <Link to={`/description`} state={card} className="Mcard" onClick={() => navigate('/description')}>
      <img className="Photo" src={card.image} alt="photo" />
      <h2>{card.title}</h2>
    </Link>


  )

}

export default MovieCard