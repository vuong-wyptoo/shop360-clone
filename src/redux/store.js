import { configureStore } from '@reduxjs/toolkit';
import cartItemsSlice from './shopping-cart/cartItemsSlice';

const store = configureStore({
    reducer: {
        cartItems: cartItemsSlice.reducer,
    },
});

export default store;
