import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className='menu'>
            <h1 className='menu-title'>House do código</h1>
            <span><Link to="/cart" className='menu-total' >0 produtos</Link></span>            
        </nav>);
}

export default Menu;