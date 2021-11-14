import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick (!click);

    const closeMobileMenu = () => setClick(false);

    const [dropdown, setDropdown] = useState(false);

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
                        <Link to='/Reporte_averias' className='nav-links' onClick={closeMobileMenu}>
                            REPORTE AVERIAS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Lista_pago' className='nav-links' onClick={closeMobileMenu}>
                            PAGOS REALIZADOS
                        </Link>
                    </li>
                    
                </ul>
                <Button/>
            </nav>
        </>
    )
}

export default Navbar;