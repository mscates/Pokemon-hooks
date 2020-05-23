import React from "react";
import "./Pokecard.css";

const Pokecard = ({ data: { name, type, base_experience, newId } }) => {
  return (
    <div className="card">
      <h2>{name}</h2>

      <img
        className="poke-image"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId}.png`}
        alt="pokemon"
      />
      <h3>{`Type: ${type}`}</h3>
      <h3>{`EXP: ${base_experience}`}</h3>
    </div>
  );
};

export default Pokecard;
