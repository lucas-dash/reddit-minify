import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../app/store';

const postsSlice = createSlice({
  name: 'subreddit',
  initialState: {
    subreddit: 'r/popular',
    searchTerm: '',
  },
  reducers: {
    setSubreddit: (state, action: PayloadAction<string>) => {
      state.subreddit = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSubreddit, setSearchTerm } = postsSlice.actions;

export const selectSubreddit = (state: RootState) => state.subreddit.subreddit;

export const searchTerm = (state: RootState) => state.subreddit.searchTerm;

export default postsSlice.reducer;

export const subredditApi = createApi({
  reducerPath: 'subredditApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.reddit.com/' }),
  endpoints: (builder) => ({
    getSubreddit: builder.query({
      query: (name: string) => `${name}.json`,
    }),
    getCommunities: builder.query({
      query: () => 'subreddits.json',
    }),
  }),
});

export const { useGetSubredditQuery, useGetCommunitiesQuery } = subredditApi;
