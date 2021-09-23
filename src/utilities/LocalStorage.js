const addToLocalStorage = id => {

    const exists = getLocalStorage()
    let shopping_cart = {};
    if (!exists) {
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(exists);
        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        } else {
            shopping_cart[id] = 1;
        }
    }
    updateLocalStorage(shopping_cart);
}


const getLocalStorage = () => localStorage.getItem('shopping_cart');

const updateLocalStorage = (shopping_cart) => {
    localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
}

const removeFromLocalStorage = id => {
    const exists = getLocalStorage();
    if (!exists) {

    }
    else {
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        updateLocalStorage(shopping_cart);
    }
}

export { addToLocalStorage, removeFromLocalStorage };