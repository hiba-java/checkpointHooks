import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ text, rating }) {
  const listCard = [
    {
      title: "Ad astra",
      description: "Ad Astra ou Vers les étoiles au Québec et au Nouveau-Brunswick, est un film de science-fiction américain coécrit et réalisé par James Gray, sorti en 2019. Il est présenté en compétition officielle lors de la Mostra de Venise 2019.",
      postUrl: "https://www.youtube.com/watch?v=o-qTpKLgSrQ",
      rating: "2",
      image: "https://fr.web.img6.acsta.net/pictures/19/08/13/14/44/4638430.jpg"
    },
    {
      title: "Emely in Paris",
      description: "Emily in Paris, ou Emily à Paris au Québec, est une série télévisée américaine créée par Darren Star et diffusée depuis le 2 octobre 20201 sur le service Netflix partout dans le monde y compris dans les pays francophones.",
      postUrl: "https://www.youtube.com/watch?v=bGaVgV1DrDw",
      rating: "1",
      image: "https://resizing.flixster.com/S0H9GC8fI5xuSKn6FpeSnJK_okM=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p20738800_b_h9_ad.jpg"
    },
    {
      title: "A la dérive",
      description: "À la dérive ou En pleine tempête au Québec1 (Adrift) est un film américain adapté d'une histoire vraie, réalisé par Baltasar Kormákur et sorti en 2018.",
      postUrl: "https://www.youtube.com/watch?v=jzjJ9thxgo8",
      rating: "3",
      image: "https://static.pointculture.be/media/a7/55/59/cover_va1413_scale_345x750.jpg"
    },
    {
      title: "Sand Castel",
      description: "Beau Christian Knapp (born April 17, 1989) is an American actor. He is known for his roles in The Signal (2014), Run All Night (2015), and Southpaw (2015).[1] Knapp portrayed a lead villain in Death Wish (2018), the sixth installment of the Death Wish series",
      postUrl: "https://www.youtube.com/watch?v=8hq28cZ938E",
      rating: "4",
      image: "https://fr.web.img2.acsta.net/c_310_420/pictures/17/10/24/15/02/4552870.jpg"
    },

  ]

  return (

    <div className="List" >
      {rating !== "" ? listCard.filter(el => el.rating === rating).map((el, i) => <div className='SingleDiv' key={i} ><MovieCard card={el} /> </div>) :
        listCard.filter(el => el.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())).map((el, i) => <div className='SingleDiv' key={i} ><MovieCard card={el} /> </div>)

      }
    </div>
  )
}

export default MovieList