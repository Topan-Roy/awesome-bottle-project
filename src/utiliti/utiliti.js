const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');

    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, id];

    // save new cart to the local storage
    saveCartToLocalStorage(newCart);
}

const removeFromLocalStorage = id => {
    const storedCart = getCartFromLocalStorage();
    const reaminigeCard = storedCart.filter(storedId => storedId !== id);
    saveCartToLocalStorage(reaminigeCard);
}


// const add = (a, b) => a + b;

export {
    getCartFromLocalStorage as getStoreCart,
    addItemToCartLocalStorage as addToStoredCart,
    removeFromLocalStorage as removeFromCard
}