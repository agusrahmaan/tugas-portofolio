import { useContext } from "react";
import { ThemeContext, strings } from "../App";

const Portofolio = (props) => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(ThemeContext);

  return (
    <div
      className={`border-double border-4 w-2/3 border-blue-600 flex-col flex  p-3 rounded-md ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <img
        className="w-auto h-32 rounded-t-lg"
        src={props.image}
        alt={props.title}
      />
      <h2 className="font-bold text-2xl">{props.title}</h2>
      <p className="pb-5">{props.description}</p>
      <a
        target="blank"
        href={props.linkRepo}
        className="border-none w-auto flex justify-center p-1 rounded-md bg-blue-400 cursor-pointer hover:bg-blue-700 "
      >
        {strings[language].view}
      </a>
    </div>
  );
};

export default Portofolio;
