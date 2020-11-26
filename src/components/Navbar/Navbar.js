import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import {
     Nav, 
     NavbarContainer, 
     NavLogo, 
     NavIcon, 
     MobileIcon 
    } from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false)

    // const handleClick = () => setClick

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon/>
                        ULTRA
                    </NavLogo>
                    <MobileIcon>
                        {click ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
