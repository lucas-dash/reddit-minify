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
  secure_media: securemediaType;
};

export type securemediaType = {
  reddit_video: { fallback_url: string };
};

export type CommentsType = {
  data: Comments;
};

export type Comments = {
  id: string;
  author: string;
  body: string;
  created_utc: number;
};

export type CommunityType = {
  data: { id: string; banner_img: string; display_name_prefixed: string };
};

export type ExpandCardProps = {
  close: React.Dispatch<React.SetStateAction<boolean>>;
  permalink: string;
  author: string;
  created: number;
  title: string;
  url: string;
  secure_media: securemediaType;
  ups: number;
  num_comments: number;
  subreddit: string;
};
