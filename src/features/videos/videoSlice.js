import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  videos: [],
  error: "",
};
export const getVideos = createAsyncThunk("videos/getByRequest", async () => {
  const res = await fetch("http://localhost:3000/api/video");
  const videos = await res.json();
  return videos.data;
});
const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getVideos.pending, (state, action) => {
      (state.loading = true), (state.error = "");
    });
    builder.addCase(getVideos.fulfilled, (state, action) => {
      (state.loading = false), (state.videos = action.payload), (state.error = "");
    });
    builder.addCase(getVideos.rejected, (state, action) => {
      (state.loading = false), (state.videos = []), (state.error = action.error.message);
    });
  },
});


export const {} = videoSlice.actions;
export default videoSlice.reducer;
