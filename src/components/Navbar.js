import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiMoneyStack } from 'react-icons/gi';
import { FaMoneyCheck, FaRegMoneyBillAlt } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                    <img className='logo' src={process.env.PUBLIC_URL + "/images/logobud.jpg"} alt="Logo"></img>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaMoneyCheck className='close' /> : <FaRegMoneyBillAlt className='close' />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li onClick='nav-menu'>
                        <Link to='/intro' className='nav-links'>
                            Start Budgeting!
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar