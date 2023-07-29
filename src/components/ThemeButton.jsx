import { useContext } from "react";
import { ThemeContext, strings } from "../App";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language } = useContext(ThemeContext);

  return (
    <button
      className={`flex flex-row gap-2 font-bold ${
        theme === "dark" ? "text-white" : "text-black"
      } `}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {strings[language].tema}
      {theme === "light" ? (
        <MdDarkMode size={28} />
      ) : (
        <MdLightMode color="white" size={28} />
      )}
    </button>
  );
}
