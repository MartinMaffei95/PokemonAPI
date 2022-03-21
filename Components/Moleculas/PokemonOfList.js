import { useContext } from 'react'
import { pokemonContext} from '../../pages/index'

const PokemonOfList =({pkmName,pkmId})=>{

    const context = useContext(pokemonContext)


    const selectPokemon =(e)=>{
        context.setPokemonName(e.target.closest('li').id)
        // console.log(context.pokemon)
    }

    const getId =(string) =>{
        let str = string
        let str2 = str.split('/')
        let id=str2[6]
        return id
    }
    getId(pkmId)

    return(
    <li className='pokedex_list-item' onClick={selectPokemon} key={getId(pkmId)} id={pkmName}><p>{pkmName}</p><span>{getId(pkmId)}</span></li>
    )
}

export default PokemonOfList