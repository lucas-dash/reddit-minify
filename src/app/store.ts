import { configureStore } from '@reduxjs/toolkit';
import subRedditReducer from '../features/posts/postsSlice';
import { subredditApi } from '../features/posts/postsSlice';
import { commentsApi } from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    subreddit: subRedditReducer,
    [subredditApi.reducerPath]: subredditApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(subredditApi.middleware)
      .concat(commentsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
