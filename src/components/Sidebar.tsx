import Communities from './Communities';
import { FiX } from 'react-icons/fi';

type SidebarType = {
  handleClose: () => void;
};

const Sidebar = ({ handleClose }: SidebarType) => {
  return (
    <aside className="sm:hidden inset-0 w-full bg-primary flex flex-col gap-2 px-5 fixed">
      <div
        onClick={handleClose}
        className="btn btn-neutral hover:btn-primary text-secondary btn-circle mt-5 "
        aria-label="hide menu"
        role="button"
      >
        <FiX size={30} />
      </div>
      <div className="w-full flex justify-center">
        <Communities handleClose={handleClose} />
      </div>
    </aside>
  );
};
export default Sidebar;
