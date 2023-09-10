// import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({ cart, handleRemoveCart }) => {
    return (
        <div>
            <h3>Cart: {cart.length}</h3> 
            <div className="cart-container">
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img className='img'  src={bottle.img} />
                        <button onClick={() =>handleRemoveCart(bottle.id)}>Remove</button>
                    </div> )
                }
            </div>
        </div>
    );
};


export default Cart;