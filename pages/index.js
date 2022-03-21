import Pokedex from "../Components/Pokedex";
import { createContext, useContext, useEffect, useState } from "react";

export const pokemonContext = createContext();

export default function Home() {

  const [pokemonName, setPokemonName] = useState('bulbasaur')
  const [pokemon,setPokemon] = useState(pokemonName)
  const [pokemonSpecie,setPokemonSpecie] = useState('')
  const [list, setList] = useState()
  let url = 'https://pokeapi.co/api/v2/pokemon/'
  let urlSpecies ='https://pokeapi.co/api/v2/pokemon-species/';


 const findHandler =(e)=>{
    setPokemonName(e.target.value)
  }


  const fetchingList =  ()=>{
     fetch ('https://pokeapi.co/api/v2/pokemon?limit=152&offset=0')
    .then(res => res.json())
    .then(data => setList(data))
  }

 
  
  const fetchPokemon =   (url,name)=>{
     fetch (url + `${name}`)
    .then(res => res.json())
    .then(pkm => setPokemon(pkm))
  }

  const fetchSpecies =  (url,id)=>{
     fetch (url + id)
    .then(res => res.json())
    .then(spec => setPokemonSpecie(spec))
  }

  useEffect(async ()=>{
       fetchingList()
       fetchPokemon(url,pokemonName)
       fetchSpecies(urlSpecies,pokemonName)
  },[pokemonName])

  return (
    <div >
      {/* <form onSubmit={fetchPokemon}>
        <input onChange={findHandler} type="text"></input>
        <input type='submit'></input>
      </form> */}
      <pokemonContext.Provider value={
       { pokemon,
        pokemonName,
        setPokemonName,
        pokemonSpecie,
        list}
      }>
        <Pokedex/>
      </pokemonContext.Provider>
    </div>
  )
}
