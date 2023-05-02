import {Nav, NavLink} from "../header/NavbarElements";

function Pageaccueil(){
    return(
        <div className='App-conteneur'>
            <h1 className="App-titre">BIENVENUE AUX FINS GOURMETS</h1>
            <Nav className="App-bouton">
                <NavLink to="/Therecette" className="App-case">SUCRÉ</NavLink>
                <NavLink to="/Therecette" className="App-case">SALÉ</NavLink>
                <NavLink to="/Therecette" className="App-case">SURPRISE</NavLink>
            </Nav>

        </div>
    ); 
}
export default Pageaccueil;