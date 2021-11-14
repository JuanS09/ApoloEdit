import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import {
    AuthContext
} from './../../Auth/Contexts/auth.context';

function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick (!click);

    const closeMobileMenu = () => setClick(false);

    const [dropdown, setDropdown] = useState(false);

    const {
        user,
    } = useContext(AuthContext);
    const isAdmin = user?.userDoc?.type || false;

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else{
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else{
            setDropdown(false);
        }
    }

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src='https://scontent.fmga3-1.fna.fbcdn.net/v/t31.18172-8/11219474_580880788718685_213548138517917174_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wKGH9XbEGnwAX-2sXad&_nc_ht=scontent.fmga3-1.fna&oh=edce0fb51b21677e08aab1a19950e98d&oe=61AA9C00'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            INICIO
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Ubicacion' className='nav-links' onClick={closeMobileMenu}>
                            UBICANOS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Nosotros' className='nav-links' onClick={closeMobileMenu}>
                            NOSOTROS
                        </Link>
                    </li>
                    {isAdmin && (
                        <li className='nav-item'>
                            <Link to='/administrador' className='nav-links' onClick={closeMobileMenu}>
                                ADMINISTRADOR
                            </Link>
                        </li>
                    )}
                    {user ? (
                        <li className='nav-item'>
                            <a href='#' className='nav-links'>
                                CERRAR SESION
                            </a>
                        </li>
                    ) : (
                        <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                INICIO SESIÓN <i className='fas fa-caret-down'/>
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;