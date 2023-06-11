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

  const { data: Posts, isLoading } = useGetSubredditQuery(subreddit);
  console.log(Posts);
  return (
    <section className="flex flex-col items-center gap-5">
      {isLoading ? (
        <Loading />
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
