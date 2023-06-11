import { configureStore } from '@reduxjs/toolkit';
import subRedditReducer from '../features/posts/postsSlice';
import { subredditApi } from '../features/posts/postsSlice';

export default configureStore({
  reducer: {
    subreddit: subRedditReducer,
    [subredditApi.reducerPath]: subredditApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(subredditApi.middleware),
});
