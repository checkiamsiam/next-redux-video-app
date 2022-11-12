import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/videos/videoSlice";
import tagReducer from "../features/tags/tagSlice";
import currentVideoReducer from "../features/currentVideo/currentVideoSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: tagReducer,
    currentVideo: currentVideoReducer,
  },
});

export default store;
