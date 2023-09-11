import { useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import userSlice, { User } from "./slices/userSlice";

const rootReducer = combineReducers({
  userState: userSlice.reducer,
});

export type RootState = ReturnType<typeof appReducer>;

const appReducer = persistReducer(
  { key: "main", storage: storage },
  rootReducer
);

export default appReducer;

export const useUserState = (): User =>
  useSelector((state: RootState) => state.userState);
