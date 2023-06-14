import { formatRelativeTime } from '../../utils/functions';
import { Comments } from '../../utils/types';

const Comment = ({ author, created_utc, body }: Comments) => {
  return (
    <div className="border-1 border-bgButton shadow-sm shadow-secondary/30 rounded-lg p-2 border border-secondary/10">
      <div className="flex gap-3 items-center pb-4 flex-wrap">
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
            Commented {formatRelativeTime(created_utc)}
          </p>
        </div>
      </div>
      <p className="font-medium text-base pb-4 pl-3 pr-1 break-words">{body}</p>
    </div>
  );
};
export default Comment;
