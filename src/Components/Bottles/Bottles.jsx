import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getTheDataFromLS } from "../../Utilities/localstorage";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cartBottles, setcartBottles] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    //load cart from local storage
    useEffect(() => {
            console.log(bottles.length);
            if(bottles.length > 0){
                const storedCart = getTheDataFromLS();
                // console.log(storedCart, bottles);
                const savedCart = [];
                for(let id of storedCart){
                    console.log(id);
                    const bottle = bottles.find(bottle => bottle.id === id);
                    if(bottle){
                        savedCart.push(bottle);
                    }
                }
                console.log(savedCart);
                setcartBottles(savedCart);
            }
    },[bottles])
    const handleAddToCart = (bottle) => {
        const newCart = [...cartBottles, bottle];
        setcartBottles(newCart);
        addToLS(bottle.id)

    }
    return (
        <div >
            <h2>Bottles Available: {bottles.length}</h2>
            {/* <h4>Cart Added: {cartBottles.length}</h4> */}
            <Cart cart={cartBottles}></Cart>
            <div className="bottles">
            {
                bottles.map(bottle => <Bottle
                key={bottle.id}
                bottle={bottle}
                handleAddToCart={handleAddToCart}
                ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;