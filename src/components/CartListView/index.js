import React from 'react';
import CartContext from '../../context/CartContext';
import CartItem from '../cartItem';

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const { cartList } = value;

      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          
          ))}
        </ul>
      );
    }}
  </CartContext.Consumer>
);

export default CartListView;
