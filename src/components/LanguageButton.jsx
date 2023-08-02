import { useContext } from "react";
import { ThemeContext } from "../App";

const LanguageButton = () => {
  const { setLanguage } = useContext(ThemeContext);

  return (
    <div className="flex flex-row ">
      <button
        className="border-2 border-white m-1 p-1 text-white rounded-full hover:bg-teal-400"
        onClick={() => setLanguage("id")}
      >
        ID
      </button>
      <button
        className="border-2 border-white m-1 p-1 text-white rounded-full"
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageButton;
