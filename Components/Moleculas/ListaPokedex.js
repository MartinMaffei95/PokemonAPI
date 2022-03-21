import { useContext } from 'react'
import { pokemonContext} from '../../pages/index'
import PokemonOfList from './PokemonOfList'

const ListaPokedex = ()=>{

    const context = useContext(pokemonContext)

    
    
return(
    
    <ul className='pokedex_list'>
        {context.list ? (context.list.results.map(pkm => (<PokemonOfList pkmName={pkm.name} pkmId={pkm.url}/>))): (<></>)}
    </ul>
)
}

export default ListaPokedex