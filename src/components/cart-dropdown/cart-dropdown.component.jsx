import React from 'react';
import { useSelector } from 'react-redux';
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { Link } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    console.log(cartItems)
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length
                    ? cartItems.map(item => <CartItem key={item.id} cartItem={item} />) 
                    : (
                        <EmptyMessage>Your Cart Is Empty</EmptyMessage>
                )}
            </CartItems>
            <Link to='/checkout'>
                <Button>GO TO CHECKOUT</Button>
            </Link>
        </CartDropdownContainer>
    )
}

export default CartDropdown;