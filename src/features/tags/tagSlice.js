import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  tags: [],
  error: "",
};
export const getTags = createAsyncThunk("tags/getByRequest", async () => {
  const res = await fetch("http://localhost:3000/api/tags");
  const tags = await res.json();
  return tags.data;
});
const tagSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTags.pending, (state, action) => {
      (state.loading = true), (state.error = "");
    });
    builder.addCase(getTags.fulfilled, (state, action) => {
      (state.loading = false), (state.tags = action.payload), (state.error = "");
    });
    builder.addCase(getTags.rejected, (state, action) => {
      (state.loading = false), (state.tags = []), (state.error = action.error.message);
    });
  },
});

export const {} = tagSlice.actions;
export default tagSlice.reducer;
