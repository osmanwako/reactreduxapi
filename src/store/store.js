import { configureStore } from "@reduxjs/toolkit";
import Usereducer from './users/usersSlice';

export const store = configureStore({
    reducer: {
        userstore: Usereducer,
    }
})