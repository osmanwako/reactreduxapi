import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isloading: false,
    error: undefined,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (num, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${num}`);
        if (!response.ok) {
            return rejectWithValue(response.status)
        }
        const data = await response.json();
        return fulfillWithValue(data.results)
    } catch (error) {
        throw rejectWithValue(error.message)
    }
});

const Userslice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            console.log("pending", state, action);
            state.isloading = true;
            state.error = false;
            state.users = [];
        }).addCase(fetchUsers.fulfilled, (state, action) => {
            console.log("fulfilled", state, action);
            state.isloading = false;
            state.error = false;
            state.users = action.payload;
        }).addCase(fetchUsers.rejected, (state, action) => {
            console.log("rejected", state, action);
            state.isloading = false;
            state.error = action.payload;
            state.users = [];
        });
    },
});

export default Userslice.reducer;
