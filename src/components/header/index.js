import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
return (
    

        <>
        <Nav className='bg-neutral-200 flex justify-between p-5 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]'>
            <div className="flex">
                <img src="./burger.svg" className="w-12 mr-4 svg-color" />
                <img src="./logo-chef.jpg" className="w-16 h-16" />
            </div>
            <NavMenu className='text-xl flex p-5 uppercase'>
                <NavLink to="/Accueil" activeStyle className='px-5 cursor-pointer font-bold b-color'>
                    Accueil
                </NavLink>
                <NavLink to="/Therecette" activeStyle className='px-5 cursor-pointer font-bold b-color'>
                    Recette
                </NavLink>
                <NavLink to="/Recherche" activeStyle className='px-5 cursor-pointer font-bold b-color'>
                    Recherche
                </NavLink>
                <NavLink to="/Contact" activeStyle className='px-5 cursor-pointer font-bold b-color'>
                    Contact
                </NavLink>
            </NavMenu>
        </Nav>
        </>

    
);
};

export default Navbar;