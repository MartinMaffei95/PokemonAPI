import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

const Filter =()=>{

    let filters = ['Id','Nombre','Tipo principal'] ;   

    const [active, setActive] = useState(false)

    const toggleMenu =()=>{
        console.log(active)
        if(!active){
            setActive(true)
        }else{
            setActive(false
        )}
    }

    
    return(
        <>
        <div className="filter-container">
            <span onClick={toggleMenu} className="filter-container_title">
                    Ordenado por: <AiFillCaretDown className={`filter-container_title__icon ${active && 'active'}` }/>
            </span>
            <ul className={`filter-container_list ${active && 'active'}`} >
               {filters.map(
                   f =>(
                   <li className="filter-container_item">
                       <span className="filter-container_item__text">
                           {f}
                        </span>
                       </li>
                        )
                   )}           
            </ul>
        </div>
        </>
    )

}

export default Filter