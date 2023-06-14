import { useSelector } from 'react-redux';
import { useGetSubredditQuery } from './postsSlice';
import { PostType } from '../../utils/types';
import { selectSubreddit } from './postsSlice';
import Post from './Post';
import Loading from './Loading';

type apiPost = {
  data: PostType;
};

const Posts = () => {
  const subreddit = useSelector(selectSubreddit);

  const { data: Posts, isLoading, isError } = useGetSubredditQuery(subreddit);
  console.log(Posts);

  return (
    <section className="flex flex-col items-center gap-5">
      <div className="flex justify-start lg:justify-center w-full">
        <h1 className="font-bold pl-5 lg:pl-0 text-lg">{subreddit}</h1>
      </div>

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
          <span>Error! Failed to load posts.</span>
        </div>
      )}
      {isLoading ? (
        <>
          <Loading />
          <Loading />
          <Loading />
        </>
      ) : (
        Posts?.data.children.map((post: apiPost) => {
          const { data } = post;

          return <Post key={data.id} {...data} />;
        })
      )}
    </section>
  );
};
export default Posts;
