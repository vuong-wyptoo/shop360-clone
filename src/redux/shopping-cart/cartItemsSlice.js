import { createSlice } from '@reduxjs/toolkit';
// import { useStore } from '@/store';

// const user = useStore((state) => state.user);
const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : [];
const initialState = {
    value: items,
};
export const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const duplicate = state.value.filter(
                (e) =>
                    e.slug === newItem.slug &&
                    e.name === newItem.name &&
                    e.color === newItem.color &&
                    e.size === newItem.size,
            );
            if (duplicate.length > 0) {
                state.value = state.value.filter(
                    (e) => e.slug !== newItem.slug || e.color !== newItem.color || e.size !== newItem.size,
                );
                state.value = [
                    ...state.value,
                    {
                        id: duplicate[0].id,
                        slug: newItem.slug,
                        name: newItem.name,
                        color: newItem.color,
                        image: newItem.image,
                        size: newItem.size,
                        price: newItem.price,
                        quantity: newItem.quantity + duplicate[0].quantity,
                    },
                ];
            } else {
                state.value = [
                    ...state.value,
                    {
                        ...action.payload,
                        id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1,
                    },
                ];
            }
            localStorage.setItem(
                'cartItems',
                JSON.stringify(state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))),
            );
        },
        updateCartItem: (state, action) => {
            const itemUpdate = action.payload;

            const item = state.value.filter(
                (e) => e.slug === itemUpdate.slug && e.color === itemUpdate.color && e.size === itemUpdate.size,
            );
            if (item.length > 0) {
                state.value = state.value.filter(
                    (e) => e.slug !== itemUpdate.slug || e.color !== itemUpdate.color || e.size !== itemUpdate.size,
                );
                state.value = [
                    ...state.value,
                    {
                        ...itemUpdate,
                        id: item[0].id,
                    },
                ];
            }
            localStorage.setItem(
                'cartItems',
                JSON.stringify(state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))),
            );
        },
        removeItem: (state, action) => {
            const item = action.payload;
            state.value = state.value.filter(
                (e) => e.slug !== item.slug || e.color !== item.color || e.size !== item.size,
            );
            localStorage.setItem(
                'cartItems',
                JSON.stringify(state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))),
            );
        },
    },
});
export const { addItem, updateCartItem, removeItem } = cartItemsSlice.actions;
export default cartItemsSlice;
