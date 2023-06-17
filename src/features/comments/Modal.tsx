import { commentFormater, formatRelativeTime } from '../../utils/functions';
import { CommentsType, securemediaType } from '../../utils/types';
import { useGetCommentsQuery } from './commentsSlice';
import {
  FiChevronDown,
  FiChevronUp,
  FiMaximize2,
  FiMessageSquare,
  FiX,
} from 'react-icons/fi';
import Comment from './Comment';
import { setSubreddit } from '../posts/postsSlice';
import { useDispatch } from 'react-redux';
import CLoading from './CLoading';
import { AppDispatch } from '../../app/store';

type ExpandCardProps = {
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

const Modal = ({
  close,
  permalink,
  author,
  created,
  url,
  title,
  secure_media,
  ups,
  num_comments,
  subreddit,
}: ExpandCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: comments, isLoading, isError } = useGetCommentsQuery(permalink);

  return (
    <div className="fixed inset-0 m-0 h-full w-full p-0 bg-secondary/30 overflow-y-hidden z-50 grid place-items-center">
      <article className="w-[95%] mx-auto h-max min-h-[300px] max-h-[560px] rounded-xl bg-background p-4 overflow-x-hidden overflow-y-scroll">
        <div className="w-full justify-end flex">
          <button className="bg-transparent" onClick={() => close(false)}>
            <FiX size={23} />
          </button>
        </div>
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
            <p className="text-details text-sm text-center">
              {formatRelativeTime(created)}
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

          <div className="flex items-center w-max gap-1 bg-transparent text-sm text-details">
            <FiMessageSquare size={20} style={{ color: 'black' }} />
            <p>{commentFormater(num_comments)}</p>
          </div>

          <button
            className="bg-bgButton rounded-md w-max py-1 px-3 text-details text-sm hover:bg-bgButton/80 active:scale-95 transition-all"
            onClick={() => {
              dispatch(setSubreddit(`r/${subreddit}`));
              close(false);
            }}
          >
            r/{subreddit}
          </button>
          <button
            className="flex bg-transparent items-center gap-2 hover:scale-105 active:scale-95 transition-all"
            onClick={() => close(false)}
          >
            hide <FiMaximize2 />
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-7">
          {isError && (
            <div className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! Failed in loading comments.</span>
            </div>
          )}

          {isLoading ? (
            <CLoading />
          ) : (
            comments[1].data?.children?.map((comment: CommentsType) => {
              const { data } = comment;
              return <Comment key={data.id} {...data} />;
            })
          )}
        </div>
      </article>
    </div>
  );
};
export default Modal;
