import { useContext } from "react";
import { ThemeContext } from "../App";

const LanguageButton = () => {
  const { setLanguage } = useContext(ThemeContext);

  return (
    <div className="flex flex-row ">
      <button
        className="border-2 border-white m-3 p-2 text-white rounded-md"
        onClick={() => setLanguage("id")}
      >
        Indonesia
      </button>
      <button
        className="border-2 border-white m-3 p-2 text-white rounded-md"
        onClick={() => setLanguage("en")}
      >
        English
      </button>
    </div>
  );
};

export default LanguageButton;
