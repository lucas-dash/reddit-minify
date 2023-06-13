import { useDispatch } from 'react-redux';
import { subreddits } from '../utils/constants';
import { AppDispatch } from '../app/store';
import { setSubreddit } from '../features/posts/postsSlice';

const Communities = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className="hidden sm:block sticky top-20 text-secondary min-w-[210px] max-w-[14rem] max-h-[320px] bg-background rounded-[1rem]  p-[10px]">
      <h3 className="font-semibold text-lg">Top Communities</h3>
      <div className="flex flex-col gap-4 mt-4 mx-1">
        {subreddits.map((subreddit) => {
          return (
            <div
              className="flex items-center justify-between"
              key={subreddit.id}
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-details rounded-full"></div>
                <p className="font-medium">{subreddit.name}</p>
              </div>

              <button
                className="btn btn-xs btn-primary text-background"
                onClick={() => dispatch(setSubreddit(subreddit.name))}
              >
                Show
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Communities;
