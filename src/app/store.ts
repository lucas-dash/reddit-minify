import { configureStore } from '@reduxjs/toolkit';
import subRedditReducer from '../features/posts/postsSlice';

export default configureStore({
  reducer: {
    subreddit: subRedditReducer,
  },
});
