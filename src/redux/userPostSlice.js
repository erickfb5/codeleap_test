import { createSlice } from "@reduxjs/toolkit";

export const userPostSlice = createSlice({
  name: "userPost",
  initialState: { value: { id: "", username: "", title: "", content: "" } },
  reducers: {
    userPost: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userPost } = userPostSlice.actions;

export default userPostSlice.reducer;
