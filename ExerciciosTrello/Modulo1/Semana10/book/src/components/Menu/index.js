import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/Cart';

function Menu() {

    const {cart} = useContext(CartContext)

    return (
        <nav className='menu'>
            <h1 className='menu-title'><Link to="/" className='menu-total' >House do código</Link></h1>
            <span><Link to="/cart" className='menu-total' >{cart.length} produtos</Link></span>            
        </nav>);
}

export default Menu;