import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
    return res.json();
  });
});

export const UserData = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
    error: "",
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// export default postData.reducer();
