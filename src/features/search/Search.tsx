import { FiSearch } from 'react-icons/fi';

const Search = () => {
  return (
    <div className="w-full max-w-[400px]">
      <label htmlFor="search" className="relative">
        <div className="absolute -top-0.5 left-2 cursor-pointer">
          <FiSearch size={23} />
        </div>
        <input
          type="search"
          id="search"
          placeholder="Search..."
          aria-label="search for subreddits"
          className="input input-bordered h-10 w-full pl-10 focus:outline-bgButton bg-bgButton"
        />
      </label>
    </div>
  );
};
export default Search;
