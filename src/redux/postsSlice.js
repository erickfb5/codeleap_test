import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../actions/fetchPosts";

const initialState = { value: [] };

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default postsSlice.reducer;
