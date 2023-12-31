import NavBar from '../NavBar';
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'

import CartSummary from '../CartSummary'

import EmptyCartView from '../EmptyCartView';
import './index.css';

const Cart = () => (
    <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      console.log(cartList)
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const onClickRemove = () => {
        removeAllCartItems()
      }
            return (
                <>
                 <NavBar />
                 <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <div className="button-container">
                  <button
                    className="clear-button"
                    type="button"
                    onClick={onClickRemove}
                  >
                    Clear All
                  </button>
                </div>
                <CartListView />
                <CartSummary />
              </div>
            )}
          </div>
                </>
            );
}}
</CartContext.Consumer>
);

export default Cart;