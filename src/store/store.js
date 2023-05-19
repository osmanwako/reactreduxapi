import { configureStore } from "@reduxjs/toolkit";
import Usereducer from './users/usersSlice';

export const store = configureStore({
    reducer: {
        user: Usereducer,
    }
});
export default store;