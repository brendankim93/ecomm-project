import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = () => {
const { currentUser } = useContext(UserContext);
console.log(currentUser)

const signOutHandler = async () => {
    await signOutUser();
}

const { isCartOpen, setCartOpen } = useContext(CartContext);
return (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
              currentUser ? (
              <span className='option' onClick={signOutHandler}>
                  SIGN OUT
              </span>
              ) : ( 
              <Link className='option' to='/auth'>SIGN IN</Link>
            )}
            <CartIcon />
        </div>
       {isCartOpen && <CartDropdown />}
    </div>
    );
}

export default Header;