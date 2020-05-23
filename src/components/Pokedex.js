import React from "react"
import "./Pokedex.css"
import Pokecard from "./Pokecard"

const Pokedex = ({ data }) => {
  return (
    <div className="container">
      {data.map((card) => (
        <Pokecard key={card.id} data={card} />
      ))}
    </div>
  )
}

export default Pokedex
