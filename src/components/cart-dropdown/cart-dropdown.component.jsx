import React, { useContext } from 'react';
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
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