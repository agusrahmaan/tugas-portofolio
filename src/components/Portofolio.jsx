import { useContext } from "react";
import { ThemeContext } from "../App";

const Portofolio = (props) => {
  const { theme } = useContext(ThemeContext);

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
        className="border-solid border-2 border-none w-14 p-1 rounded-md bg-blue-400 cursor-pointer hover:bg-blue-700 "
      >
        View...
      </a>
    </div>
  );
};

export default Portofolio;
