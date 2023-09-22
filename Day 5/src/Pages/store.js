import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../redux/userSlice";

export default configureStore({
    reducer: {
        user: UserReducer,
    },
});