import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { setSubreddit } from '../features/posts/postsSlice';
import { useGetCommunitiesQuery } from '../features/posts/postsSlice';
import { CommunityType } from '../utils/types';
import redditImg from '../assets/reddit.svg';

type CommunitiesPropType = {
  handleClose?: () => void;
};

const Communities = ({ handleClose }: CommunitiesPropType) => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: communities, isLoading, isError } = useGetCommunitiesQuery('');

  return (
    <aside className="sticky top-20 text-secondary w-full min-w-[220px] max-w-[420px] max-h-[520px] bg-background rounded-[1rem] p-[10px] shadow-md ">
      <h3 className="font-semibold text-lg">Top Communities</h3>
      <div className="flex flex-col gap-5 mt-4 mx-1">
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
          <div className="flex flex-col gap-3">
            <div className="w-full h-6 bg-bgButton rounded-md animate-pulse"></div>
            <div className="w-full h-6 bg-bgButton rounded-md animate-pulse"></div>
            <div className="w-full h-6 bg-bgButton rounded-md animate-pulse"></div>
            <div className="w-full h-6 bg-bgButton rounded-md animate-pulse"></div>
            <div className="w-full h-6 bg-bgButton rounded-md animate-pulse"></div>
          </div>
        ) : (
          communities?.data.children
            .slice(0, 10)
            .map((community: CommunityType) => {
              const { data } = community;

              return (
                <div
                  className="flex items-center justify-between"
                  key={data.id}
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    {data.banner_img ? (
                      <img
                        src={data.banner_img}
                        alt="community image"
                        className="w-5 h-5 rounded-full"
                      />
                    ) : (
                      <img
                        src={redditImg}
                        alt="default subreddit img"
                        className="w-5 h-5 rounded-full"
                      />
                    )}
                    <p className="font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                      {data.display_name_prefixed}
                    </p>
                  </div>
                  <button
                    className="btn btn-xs btn-primary text-background"
                    onClick={() => {
                      dispatch(setSubreddit(data.display_name_prefixed));
                      if (handleClose) {
                        handleClose();
                      }
                    }}
                  >
                    Show
                  </button>
                </div>
              );
            })
        )}
      </div>
    </aside>
  );
};
export default Communities;
