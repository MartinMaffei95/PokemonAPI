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

    const colorHandler =(pkm)=>{
        if(context.pokemon.forms){ // First verify context exist
        // Background Pkm color
            let typePkm = context.pokemon.types[0].type.name
            console.log(typePkm)
            document.documentElement.style.setProperty('--handler', `var(--${typePkm})`)
        //Type Info Color
            for (let i = 0; i < pkm.length; i++) {
                let typeName = pkm[i].type.name
                let eleForClass = document.querySelector(`.${pkm[i].type.name}`);
                eleForClass.style.backgroundImage = `linear-gradient(45deg, var(--${typeName}),white,var(--${typeName}))`
            };
        };
    }
    
    const types = (pkm)=>{
        let type = []
        if(pkm.length > 1){
        for (let i = 0; i < pkm.length; i++) {
            const element = pkm[i];
            type.push(element.type.name)
            
        }
            return type.map(t => <span className={'typeSpan ' +  t }>{t}</span>)
        }else{
                return (<span className={'typeSpan ' + pkm[0].type.name}>{pkm[0].type.name}</span>)
            }

        }

    useEffect(()=>{
        findLang('es')
        colorHandler(context.pokemon.types)
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
                    <h4 className='type'>Tipo: </h4>
                    {types(context.pokemon.types)}
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