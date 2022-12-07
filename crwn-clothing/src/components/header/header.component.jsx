import React, { useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { HeaderContainer, LogoContainer, Options, Option } from './header.styles.jsx';

const Header = () => {
const { currentUser } = useContext(UserContext);
console.log(currentUser)

const signOutHandler = async () => {
    await signOutUser();
}

const { isCartOpen } = useContext(CartContext);
return (
    <HeaderContainer>
      <LogoContainer to='/'>
          <Logo />
      </LogoContainer>
      <Options>
          <Option to='/shop'>
              SHOP
          </Option>
          <Option to='/shop'>
              CONTACT
          </Option>
          {
            currentUser ? (
            <Option as='span' onClick={signOutHandler}>
                SIGN OUT
            </Option>
            ) : ( 
            <Option to='/auth'>SIGN IN</Option>
          )}
          <CartIcon />
      </Options>
      {isCartOpen && <CartDropdown />}
    </HeaderContainer>
    );
}

export default Header;