import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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

export const selectSubreddit = (state) => state.subreddit.subreddit;

export default postsSlice.reducer;

export const subredditApi = createApi({
  reducerPath: 'subredditApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.reddit.com/' }),
  endpoints: (builder) => ({
    getSubreddit: builder.query({
      query: (name) => `${name}.json`,
    }),
  }),
});

export const { useGetSubredditQuery } = subredditApi;
