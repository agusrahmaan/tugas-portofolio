import { useContext } from "react";
import { DiDotnet } from "react-icons/di";
import { SiBytedance } from "react-icons/si";
import { ThemeContext, strings } from "../App";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(ThemeContext);

  return (
    <div className="m-5 ">
      <div className="pt-8 flex justify-center">
        <div>
          <p
            className={`font-bold ${
              theme === "dark" ? "text-blue-400" : "text-blue-800"
            } text-2xl flex flex-row pt-3`}
          >
            <span
              className={`pr-2 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {strings[language].saya}
            </span>
            Agus Rahman
          </p>
          <p
            className={`flex flex-row ${
              theme === "dark" ? "text-white" : "text-black"
            } justify-center`}
          >
            <DiDotnet size={28} />
            .NET Developer
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center h-1/5 pt-10 text-cyan-500">
        <SiBytedance size={256} />
      </div>
      <div className="border-4 border-transparent rounded-md border-t-cyan-300 p-10 font-mono text-5xl font-bold justify-center text-sky-900 flex flex-col sm:flex-row items-center">
        <p>{`"`}Victorious,</p>
        <p> Passionate,</p>
        <p> Number 1{`"`}</p>
      </div>
    </div>
  );
};

export default Main;
