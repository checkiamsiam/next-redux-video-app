import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/videos/videoSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
  },
});



export default store;
