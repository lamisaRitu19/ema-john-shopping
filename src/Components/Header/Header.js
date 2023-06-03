import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user?.email)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                        <>
                            <span>{user.email}</span>
                            <button className='btn-logOut' onClick={logOut}>Log Out</button>
                        </>
                        :
                        <>
                            <Link to="/login" className='btn-logOut'>Log In</Link>
                            <Link to="/signup" className='btn-logOut'>Sign Up</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;