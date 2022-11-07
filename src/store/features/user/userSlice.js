import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: '',
        username: '',
        email: '',
        token: '',
    },
    reducers: {
        setUser : (state , action) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.token = action.payload.token;
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;