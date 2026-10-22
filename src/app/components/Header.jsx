import Logo from "../components/Logo";
import {IoMdNotificationsOutline} from "react-icons/io";
import {GoSun} from "react-icons/go";

const Header = () => {
  return (
    <header
      className="
    flex h-16 shadow-xl bg-(--header-bg) text-gray-600 sticky top-0 z-999 
    font-extrabold text-2xl items-center p-4 justify-between"
    >
      <Logo />
      <div className="flex gap-8">
        {/* <GoSun className="size-8" /> */}
        <IoMdNotificationsOutline className="size-8 transition-colors duration-400 ease-in-out hover:text-[#E38982] active:text-[#E38982]" />
      </div>
    </header>
  );
};

export default Header;
