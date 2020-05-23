import React, { useState } from "react"
import Pokedex from "./Pokedex"

function Pokegame() {
  const [pokemon, setPokemon] = useState([
    {
      newId: null,
      id: 4,
      name: "Charmander",
      type: "fire",
      base_experience: 62,
    },
    {
      newId: null,
      id: 7,
      name: "Squirtle",
      type: "water",
      base_experience: 63,
    },
    {
      newId: null,
      id: 11,
      name: "Metapod",
      type: "bug",
      base_experience: 72,
    },
    {
      newId: null,
      id: 12,
      name: "Butterfree",
      type: "flying",
      base_experience: 178,
    },
    {
      newId: null,
      id: 25,
      name: "Pikachu",
      type: "electric",
      base_experience: 112,
    },
    {
      newId: null,
      id: 39,
      name: "Jigglypuff",
      type: "normal",
      base_experience: 95,
    },
    {
      newId: null,
      id: 94,
      name: "Gengar",
      type: "poison",
      base_experience: 225,
    },
    {
      newId: null,
      id: 133,
      name: "Eevee",
      type: "normal",
      base_experience: 65,
    },
  ])

  const [firstGroup, setfirstGroup] = useState([])
  const [secondGroup, setsecondGroup] = useState([])
  const [groupOneExp, setgroupOneExp] = useState(0)
  const [groupTwoExp, setgroupTwoExp] = useState(0)

  const handleIdLength = (id) => {
    let numOfZeros = 3 - id.toString().length
    let newId = "0".repeat(numOfZeros).concat(id)
    return newId
  }

  const handleSvgId = () => {
    const newPokemon = pokemon.map((poke) => {
      return {
        ...poke,
        newId: handleIdLength(poke.id),
      }
    })
    setPokemon([...newPokemon])
    return newPokemon
  }

  const fisherYatesSort = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  }

  const handleTotalExperienceEachGroup = (arr) => {
    return arr.reduce((total, currentItem) => {
      return total + currentItem.base_experience
    }, 0)
  }

  const arrangePokemon = () => {
    let newPoke = handleSvgId()
    let newSort = fisherYatesSort(newPoke)
    let groupOne = newSort.slice(0, 4)
    let groupTwo = newSort.slice(4)
    setgroupOneExp(handleTotalExperienceEachGroup(groupOne))
    setgroupTwoExp(handleTotalExperienceEachGroup(groupTwo))
    setfirstGroup([...groupOne])
    setsecondGroup([...groupTwo])
  }

  return (
    <div>
      <button onClick={arrangePokemon}>Pokemon Battle</button>
      <h2>Pokemon Group One</h2>
      <h3>{groupOneExp > groupTwoExp && "Winner"}</h3>
      <Pokedex data={firstGroup} />
      <h2>Pokemon Group Two</h2>
      <h3>{groupTwoExp > groupOneExp && "Winner"}</h3>
      <Pokedex data={secondGroup} />
    </div>
  )
}

export default Pokegame
// {
