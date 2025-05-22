import { Link } from "react-router"

function Header (){
return(
    <header>
        <h1>NC News</h1>
        <br></br>

        <nav>
  <Link to="/">Home</Link>

</nav>
    </header>
)
}

export default Header