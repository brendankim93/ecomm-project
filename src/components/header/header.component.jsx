import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { HeaderContainer, LogoContainer, Options, Option } from './header.styles.jsx';

const Header = () => {
const dispatch = useDispatch();
const currentUser = useSelector(selectCurrentUser);

const signOutHandler = async () => {
    dispatch(signOutStart());
}

const isCartOpen = useSelector(selectIsCartOpen);
console.log('isCartOpen: ', isCartOpen)
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