
// const getStoredData = () => {
//     const getStoredStringData = localStorage.getItem('cart');
//     if(getStoredStringData){
//         return JSON.parse(getStoredStringData);
//     }
//     return [];
// }
// const saveCartToLS = cart => {
//     const cartStringified = JSON.stringify(cart);
//     localStorage.setItem('cart', cartStringified);
// }
// const addToLS = id => {
//     const cart = getStoredData();
//     cart.push(id);
//     saveCartToLS(cart);
// }

// export {addToLS}

const getTheDataFromLS = () => {
    const getCartDataStringified = localStorage.getItem('cart');
    if(getCartDataStringified){
        return JSON.parse(getCartDataStringified);
    }
    return [];
}
const setCartData = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const addToLS = id => {
    const cart = getTheDataFromLS();
    cart.push(id);
    setCartData(cart);
}

export {addToLS, getTheDataFromLS}