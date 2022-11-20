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
export const filterVideo = createAsyncThunk("videos/filterByTag", async (tag) => {
  const res = await fetch(`http://localhost:3000/api/filter/${tag}`);
  const videos = await res.json();
  return videos.data;
});
export const searchVideo = createAsyncThunk("videos/search", async (txt) => {
  const res = await fetch(`http://localhost:3000/api/search/${txt}`);
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
    builder.addCase(filterVideo.pending, (state, action) => {
      (state.loading = true), (state.error = "");
    });
    builder.addCase(filterVideo.fulfilled, (state, action) => {
      (state.loading = false), (state.videos = action.payload), (state.error = "");
    });
    builder.addCase(filterVideo.rejected, (state, action) => {
      (state.loading = false), (state.videos = []), (state.error = action.error.message);
    });
    builder.addCase(searchVideo.pending, (state, action) => {
      (state.loading = true), (state.error = "");
    });
    builder.addCase(searchVideo.fulfilled, (state, action) => {
      (state.loading = false), (state.videos = action.payload), (state.error = "");
    });
    builder.addCase(searchVideo.rejected, (state, action) => {
      (state.loading = false), (state.videos = []), (state.error = action.error.message);
    });
  },
});


export const {} = videoSlice.actions;
export default videoSlice.reducer;
