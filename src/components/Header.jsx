import LanguageButton from "./LanguageButton";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <div className="m-0 p-0 bg-blue-900 fixed w-full flex flex-row items-center justify-between">
      <div className="p-5 text-xl text-gray-200 font-bold">
        <p>Rachman.Blogs</p>
      </div>
      <div className="flex flex-row items-center">
        <LanguageButton />
        <ThemeButton />
      </div>
    </div>
  );
};

export default Header;
