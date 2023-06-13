import Posts from '../features/posts/Posts';
import Communities from './Communities';

const Content = () => {
  return (
    <main className="text-secondary p-3 sm:grid sm:grid-cols-[210px_minmax(200px,_1fr)] gap-5">
      <Communities />
      <Posts />
    </main>
  );
};
export default Content;
