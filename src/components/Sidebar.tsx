import Communities from './Communities';

const Sidebar = () => {
  return (
    <aside className="sm:hidden inset-0 w-full bg-primary flex justify-center px-5 fixed">
      <Communities />
    </aside>
  );
};
export default Sidebar;
