import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  video: [],
  error: "",
};
export const getCurrentVideo = createAsyncThunk("currentVideo/getByRequest", async (id) => {
  const res = await fetch(`http://localhost:3000/api/video/${id}`);
  const tags = await res.json();
  return tags.data;
});
const currentVideoSlice = createSlice({
  name: "currentVideo",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCurrentVideo.pending, (state, action) => {
      (state.loading = true), (state.error = "");
    });
    builder.addCase(getCurrentVideo.fulfilled, (state, action) => {
      (state.loading = false), (state.video = action.payload), (state.error = "");
    });
    builder.addCase(getCurrentVideo.rejected, (state, action) => {
      (state.loading = false), (state.video = []), (state.error = action.error.message);
    });
  },
});


export const {} = currentVideoSlice.actions;
export default currentVideoSlice.reducer;
