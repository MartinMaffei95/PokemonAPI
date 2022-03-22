import Filter from "./Moleculas/Filter"
import Finder from "./Moleculas/Finder"

const Header =()=>{

    return (
        <header className="header">
            <Finder/>
            <Filter/>
        </header>
    )
}

export default Header