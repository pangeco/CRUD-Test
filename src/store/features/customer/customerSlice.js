import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        id: '',
        nama: '',
        ktp: '',
        alamat: '',
        status: '',
    },
    reducers: {
        setCustomer : (state , action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.ktp = action.payload.ktp;
            state.alamat = action.payload.alamat;
            state.status = action.payload.status;
        }
    }
});

export const { setCustomer } = customerSlice.actions;
export default customerSlice.reducer;