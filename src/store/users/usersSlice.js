import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: true,
    error: undefined,
}

export const Userslice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addbook: (state, { payload }) => {
            const book = { ...payload, completed: 0 };
            state.books = [...state.books, { ...book }];
            state.count += 1;
        },
        removebook: (state, action) => {
            const id = action.payload;
            //console.log(id);
            state.books = state.books.filter((book) => book.id !== id);
            state.count -= 1;
        },
        editbooktitle: (state, { payload }) => {
            const editbook = state.books.find((book) => book.id === payload.id);
            editbook.title = payload.title;
        },
    }
});

export const { addbook, removebook, editbooktitle } = counterslice.actions;

export default counterslice.reducer;