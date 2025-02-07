import { configureStore } from "@reduxjs/toolkit";
import shoppingPhoneReducer from "./../pages/HomeTemplate/ShoppingPhonePage/slice";
import bookingTicketReducer from "./../pages/HomeTemplate/HomePage/slice";
import AuthReducer from "./../pages/AdminTemplate/AuthPage/slice";
export const store = configureStore({
  reducer: {
    // Add your child reducers here
    shoppingPhoneReducer,
    bookingTicketReducer,
    AuthReducer,
  },
});
