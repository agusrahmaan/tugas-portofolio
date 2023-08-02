import Portofolio from "./components/Portofolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useState } from "react";
import { createContext } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { useRef } from "react";

export const strings = {
  id: {
    proyek: "Projek: ",
    view: "Lihat",
    tema: "Ubah Tema",
    support: "Di Dukung oleh: ",
    saya: "Saya",
  },
  en: {
    proyek: "Proyek: ",
    view: "View",
    tema: "Change Mode",
    support: "Support By: ",
    saya: "I am",
  },
};

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});

export const LanguageContext = createContext({
  language: null,
  setLanguage: () => {},
});
const App = () => {
  const project = [
    {
      id: 1,
      image: "/asp.png",
      title: "Concert Ticketing App",
      description:
        "An application that provides ticket sales for national and international music concerts.",
      linkRepo: "https://github.com/agusrahmaan/ConcertTicketingApp.git",
    },
    {
      id: 2,
      image: "/react.png",
      title: "Integer Store",
      description:
        "An application that provides the sale of sophisticated electronic communication tools.",
      linkRepo: "https://github.com/agusrahmaan/uts-react.git",
    },
    {
      id: 3,
      image: "/react.png",
      title: "Rascal Film",
      description:
        "An application that provides a variety of complete and up-to-date Korean dramas.",
      linkRepo: "https://github.com/agusrahmaan/tugas-react-5.git",
    },
    {
      id: 4,
      image: "/asp.png",
      title: "Blog Aing",
      description:
        "An application to convey ideas and thoughts in written form. Both long notes and simple notes.",
      linkRepo: "https://github.com/agusrahmaan/BlogAing.git",
    },
  ];

  const [language, setLanguage] = useState("id");

  const [theme, setTheme] = useState("dark");

  const scrollRef = useRef(null);

  const goTop = (ref) => {
    scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      <Header />
      <div
        ref={scrollRef}
        className={`p-7  ${theme === "dark" ? "bg-sky-950" : "bg-gray-400"}`}
      >
        <div>
          <Main />
        </div>
        <div className="border-solid border-1 border-cyan-700 ">
          <p className="flex justify-center text-blue-600 text-xl font-medium pb-5">
            {strings[language].proyek}
          </p>
          <div className="flex-col flex gap-3 md:flex-row items-center md:items-baseline">
            {project.map((project, index) => {
              return <Portofolio key={index} {...project} />;
            })}
          </div>
        </div>
        <div className="pt-5">
          <Footer />
          <button className="border bg-gray-500 rounded-full flex">
            <MdOutlineKeyboardDoubleArrowUp
              size={24}
              color="white"
              onClick={() => goTop(scrollRef.current)}
            />
          </button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
