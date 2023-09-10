// import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({ cart }) => {
    return (
        <div>
            <h3>Cart: {cart.length}</h3> 
            <div className="cart-container">
                {
                    cart.map(bottle => <img className='img' src={bottle.img} alt="" srcset="" /> )
                }
            </div>
        </div>
    );
};


export default Cart;