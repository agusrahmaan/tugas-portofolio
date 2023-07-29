import { BiLogoReact } from "react-icons/bi";
import { DiDotnet } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext, strings } from "../App";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(ThemeContext);

  return (
    <div className="border-4 border-transparent rounded-md border-t-cyan-300">
      <div className="flex flex-row m-2">
        <p
          className={`text-bold ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {strings[language].support}
        </p>
        <BiLogoReact size={32} className="hover:text-cyan-400" />
        <DiDotnet size={32} className="hover:text-blue-500" />
        <AiFillHtml5 size={32} className=" hover:text-amber-600" />
        <BiLogoTailwindCss size={32} className="hover:text-cyan-400" />
        <FaBootstrap size={32} className="hover:text-blue-700" />
      </div>
      <div
        className={`text-center ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        &copy;Copyright 2023 Agus Rahman
      </div>
    </div>
  );
};

export default Footer;
