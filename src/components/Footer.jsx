import { BiLogoReact } from "react-icons/bi";
import { DiDotnet } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext, strings } from "../App";
import { MdLocationOn } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(ThemeContext);

  return (
    <div className="border-4 border-transparent rounded-md border-t-cyan-300">
      <div className="flex flex-col pt-5 md:flex-row gap-24 md:items-baseline">
        <div className="text-white flex flex-col gap-3">
          <p className="flex flex-row items-center gap-2">
            <MdLocationOn size={32} />
            Bandung
          </p>
          <p className="flex flex-row items-center gap-2">
            <IoMdCall size={32} />
            +62 812 2471 2129
          </p>
          <p className="flex flex-row items-center gap-2">
            <IoMdMail size={32} />
            arh10082@gmail.com
          </p>
        </div>
        <div className="text-white ">
          <p className="font-bold">Follow Me :</p>
          <p>Follow our social media accounts for the latest information</p>
          <div className="flex flex-row gap-8 p-3">
            <a target="blank" href="https://wa.me/6281224712129/">
              <BsWhatsapp size={32} />
            </a>
            <a target="blank" href="https://www.instagram.com/agusrahmannn/">
              <BsInstagram size={32} />
            </a>
            <a target="blank" href="https://github.com/agusrahmaan">
              <BsGithub size={32} />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/agus-rahman-494630270/"
            >
              <BsLinkedin size={32} />
            </a>
          </div>
        </div>
        <div className="flex flex-row m-2">
          <p
            className={`font-bold ${
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
      </div>

      <div
        className={`text-center pt-5  ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        &copy;Copyright 2023 Agus Rahman
      </div>
    </div>
  );
};

export default Footer;
