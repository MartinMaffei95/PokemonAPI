import {useContext, useEffect, useState} from 'react'
import { pokemonContext ,listContext} from '../pages/index'
import ListaPokedex from './Moleculas/ListaPokedex'


const Pokedex = ()=>{

    const context = useContext(pokemonContext)
    
        const [description, setDescription] = useState('')
        const [typeOfPkm , setTypeOfPkm] = useState('')

    const findLang = (lang)=>{
        if(context.pokemonSpecie){
        let elem = context.pokemonSpecie.flavor_text_entries
        let arr = []
            for (let i = 0; i < elem.length; i++) {
                if(elem[i].language.name == lang){
                    let description =elem[i]
                    arr.push(elem[i])
                }}

            let arrayLength = arr.length;
            if( arrayLength > 0){
                let r = Math.floor(Math.random()*arrayLength)
                console.log(arr[r])
                setDescription( arr[r].flavor_text)
            }else{
                setDescription('')
            }
            }
    }

    const colorHandler =()=>{
        if(context.pokemon.forms){
            let typePkm = context.pokemon.types[0].type.name
            console.log(typePkm)
            document.documentElement.style.setProperty('--handler', `var(--${typePkm})`)
            console.log(document.documentElement.style.getPropertyValue('--handler'))
        }
    }
    
    useEffect(()=>{
        findLang('es')
        colorHandler()
    },[context])
    

    return(
        <>
        
        <div className='pokedex'>
            {/* <div className='solapa'>solapas</div> */}
            {context.pokemon.forms ? (
                <>
                <div className='pokedex-name'>
                    <h3 > {context.pokemon.forms[0].name}</h3>
                </div>
                <div className='pokedex-type'>
                    <h4 >{context.pokemon.types[0].type.name}</h4>
                </div>
                <div className='pokedex-img'>
                    <img  src={context.pokemon.sprites.front_default}/>
                </div>
                <p>{}</p>
                {context.pokemonSpecie.flavor_text_entries ? (<p className='pokedex-des'> {description}<span>{context.pokemon.id}</span></p>) : (<></>)}
                
            </>
            )
             : ('sin pkm')}
            <ListaPokedex/>
        </div>
        </>
        
    )
}

export default Pokedex