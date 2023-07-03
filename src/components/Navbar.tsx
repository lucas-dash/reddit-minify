import reddit from '../assets/reddit.svg';
import Search from '../features/search/Search';
import { FiUser } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setSubreddit } from '../features/posts/postsSlice';
import { AppDispatch } from '../app/store';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [open]);

  return (
    <header className="h-16 bg-background w-full flex items-center px-4 sticky top-0 shadow-md z-50">
      <nav className="flex items-center justify-start sm:justify-between gap-4 w-full">
        <div
          className="btn btn-neutral hover:btn-primary text-secondary btn-circle sm:hidden"
          aria-label="menu"
          role="button"
          onClick={handleOpen}
        >
          {/* hamburger icon */}
          <svg
            className=" fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </div>

        <div className="flex items-center gap-3 min-w-max">
          <img src={reddit} alt="reddit logo" className="w-10 h-10" />
          <h3 className="hidden sm:block text-secondary font-normal text-xl">
            Reddit minify
          </h3>
        </div>

        <ul className="hidden sm:flex flex-col sm:flex-row gap-2 md:gap-4 text-secondary font-semibold">
          <li>
            <button
              onClick={() => dispatch(setSubreddit('r/popular'))}
              className="bg-bgButton rounded-[10px] px-5 py-2 cursor-pointer hover:bg-primary transition-all active:scale-95 hover:text-background"
            >
              Popular
            </button>
          </li>
          <li>
            <button
              onClick={() => dispatch(setSubreddit('r/news'))}
              className="bg-bgButton rounded-[10px] px-5 py-2 cursor-pointer hover:bg-primary transition-all active:scale-95 hover:text-background"
            >
              News
            </button>
          </li>
        </ul>

        <Search />

        <div className="hidden sm:flex items-center justify-center gap-4">
          {/* theme  */}
          <div className="bg-bgButton rounded-full w-10 h-10 flex justify-center items-center">
            <a
              href="https://www.reddit.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiUser size={28} />
            </a>
          </div>
        </div>
      </nav>
      {open && <Sidebar handleClose={handleClose} />}
    </header>
  );
};
export default Navbar;

// <div className="bg-bgButton rounded-full w-10 h-10 flex justify-center items-center active:scale-95">
//             <label className="swap swap-rotate">
//               {/* this hidden checkbox controls the state */}
//               <input type="checkbox" />

//               {/* sun icon */}
//               <svg
//                 className="swap-on fill-current w-7 h-7"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//               </svg>

//               {/* moon icon */}
//               <svg
//                 className="swap-off fill-current w-7 h-7"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//               </svg>
//             </label>
//           </div>
