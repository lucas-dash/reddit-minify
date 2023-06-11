export type PostType = {
  id: string;
  author: string;
  title: string;
  created_utc: number;
  num_comments: number;
  permalink: string;
  subreddit: string;
  ups: number;
  url: string;
  video: string;
  secure_media: securemediaType;
};

type securemediaType = {
  reddit_video: videoType;
};

type videoType = {
  fallback_url: string;
};

// type preview = {
//     images:
// }

// type previewImg = {
//     id: string,

// }
