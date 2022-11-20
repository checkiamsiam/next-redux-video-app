import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  video: [],
  relatedVideo: [],
  error: "",
};
export const getCurrentVideo = createAsyncThunk("currentVideo/getByRequest", async (id) => {
  const res = await fetch(`http://localhost:3000/api/video/${id}`);
  const tags = await res.json();
  return tags.data;
});
export const getRelatedVideo = createAsyncThunk("currentVideo/related", async (videoId) => {
  const res = await fetch(`http://localhost:3000/api/relatedVideo`, { 
    method: "PUT", 
    body: JSON.stringify({ id : videoId}),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const relatedVideo = await res.json();
  return relatedVideo.data;
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
    builder.addCase(getRelatedVideo.pending, (state, action) => {
      (state.loading = true), (state.error = "");
    });
    builder.addCase(getRelatedVideo.fulfilled, (state, action) => {
      (state.loading = false), (state.relatedVideo = action.payload), (state.error = "");
    });
    builder.addCase(getRelatedVideo.rejected, (state, action) => {
      (state.loading = false), (state.relatedVideo = []), (state.error = action.error.message);
    });
  },
});

export const {} = currentVideoSlice.actions;
export default currentVideoSlice.reducer;
