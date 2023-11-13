// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      cartList.forEach(eachItem => {
        totalPrice += eachItem.price * eachItem.quantity
      })
      return (
        <div className="summaryCont">
          <h1 className="orderTotal">
            Order Total:
            <span className="totalPrice">RS {totalPrice}/- </span>
          </h1>
          <p className="totalCartItems">{cartList.length} items in cart</p>
          <button className="checkOutBtn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
