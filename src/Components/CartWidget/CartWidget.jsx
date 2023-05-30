import './CartWidget.css';
import  cart  from "./assets/cart.svg"


export const CartWidget = () => {
    return(
        <div>
           <img className="cart" src={cart} alt="cart-widget" />
           0 
        </div>
    )
}