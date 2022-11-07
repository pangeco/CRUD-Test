import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import customerReducer from './features/customer/customerSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        customer: customerReducer,
    }
});