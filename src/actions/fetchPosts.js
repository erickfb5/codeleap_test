import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  try {
    const response = await axios
      .get("https://dev.codeleap.co.uk/careers/")
      .catch((error) => console.log("Error: ", error));
    return response.data.results;
  } catch (error) {
    console.log("Error: ", error);
  }
});
