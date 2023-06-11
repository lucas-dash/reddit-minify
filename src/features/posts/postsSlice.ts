import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'subreddit',
  initialState: {
    subreddit: 'r/popular',
  },
  reducers: {
    setSubreddit: (state, action) => {
      state.subreddit = action.payload;
    },
  },
});

export const { setSubreddit } = postsSlice.actions;

// export const selectSubreddit = (state) => state.subreddit.subreddit

export default postsSlice.reducer;
