import { FaMoon, FaSun } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Header = ({ darkMode, toogleDarkMode,toogleSideBar }) => {
  return (
    <nav className="font-quicksand fixed top-0 z-50 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button className="flex items-center justify-center p-2 text-sm text-gray-500 
            rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400
             dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={toogleSideBar}>
              <HiOutlineMenuAlt2 className="text-2xl" />,
            </button>
            <a href="#" className="flex ml-2 md:mr-24">
              <MdSpaceDashboard className="h-8 mr-3 text-xl text-violet-500" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dashboard</span>
            </a>
          </div>
          <button
            className="dark:bg-slate-50 dark:text-slate-700 rounded-full p-2"
            onClick={toogleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
