import { createSlice } from "@reduxjs/toolkit";

export type User = {
  name: string | null;
  weight: number | null;
  level: 0 | 1 | 2 | 3 | 4;
};

const initialState: User = {
  name: null,
  weight: null,
  level: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    reset() {
      return initialState;
    },
  },
});

export default userSlice;
