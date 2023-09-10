import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    // console.log(bottle);
    const{name, img, price} = bottle;
    return (
        <div className='bottle-container'>
            <h3>Name: {name} </h3>
            <img className='img' src={img} alt="" />
            <p>Price: {price} </p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;