import { commentFormater, formatRelativeTime } from '../../utils/functions';
import { PostType } from '../../utils/types';
import {
  FiChevronUp,
  FiChevronDown,
  FiMessageSquare,
  FiMaximize2,
} from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setSubreddit } from './postsSlice';
import { AppDispatch } from '../../app/store';

const Post = ({
  author,
  title,
  created_utc,
  ups,
  num_comments,
  subreddit,
  url,
  secure_media,
}: PostType) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <article className="min-w-[300px] w-full max-w-[740px] bg-background text-secondary p-4 rounded-2xl">
      <div className="flex gap-3 items-center pb-4">
        <img
          src={`https://api.dicebear.com/6.x/personas/svg?seed=${author}`}
          alt={`${author} profile picture`}
          className="w-8 h-8 rounded-full object-cover border border-secondary"
        />
        <a
          href={`https://www.reddit.com/user/${author}/`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`link to ${author} profile`}
          className="text-details font-normal text-sm hover:text-primary transition-colors"
        >
          u/{author}
        </a>
        <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
        <div>
          <p className="text-details text-sm">
            {formatRelativeTime(created_utc)}
          </p>
        </div>
      </div>

      <div>
        {secure_media && secure_media.reddit_video && (
          <video
            src={secure_media.reddit_video.fallback_url}
            controls
            width="350"
            height="280"
            aria-label={`video of ${author} post`}
            className="aspect-video w-full rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
        )}

        {url.startsWith('https://i.red') && (
          <img
            src={url}
            alt={`image of ${author} post`}
            className="object-cover max-h-96 rounded-lg mx-auto"
          />
        )}

        {!url.includes('youtube') && !url.includes('youtu.be') && (
          <a
            className="text-details hover:text-primary pt-1 break-words"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {url}
          </a>
        )}

        <p className="font-medium text-base py-4">{title}</p>
      </div>

      <div className="flex flex-wrap gap-3 items-center justify-center sm:justify-start pt-4">
        <div className="bg-bgButton flex items-center gap-1 rounded-md w-max p-1">
          <FiChevronUp size={20} />
          <p className="font-semibold text-sm text-primary">{ups}</p>
          <FiChevronDown size={20} />
        </div>
        <button className="flex items-center w-max gap-1 bg-transparent text-sm text-details active:scale-95 transition-all">
          <FiMessageSquare size={20} style={{ color: 'black' }} />
          {commentFormater(num_comments)} comments
        </button>
        <button
          className="bg-bgButton rounded-md w-max py-1 px-3 text-details text-sm hover:bg-bgButton/80 active:scale-95 transition-all"
          onClick={() => dispatch(setSubreddit(`r/${subreddit}`))}
        >
          r/{subreddit}
        </button>
        <button className="flex bg-transparent items-center gap-2 hover:scale-105 active:scale-95 transition-all">
          view more <FiMaximize2 />
        </button>
      </div>
    </article>
  );
};
export default Post;
