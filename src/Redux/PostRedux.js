import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    return res.json();
  });
});

export const PostData = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    posts: [],
    error: "",
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// export default postData.reducer();
