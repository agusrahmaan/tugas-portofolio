import Portofolio from "./components/Portofolio";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  
  const project = [
    {
        id: 1,
        image: "/asp.png",
        title: "Concert Ticketing App",
        description: "An application that provides ticket sales for national and international music concerts.",
        linkRepo: "https://github.com/agusrahmaan/ConcertTicketingApp.git"
    },
    {
        id: 2,
        image: "/react.png",
        title: "Integer Store",
        description: "An application that provides the sale of sophisticated electronic communication tools.",
        linkRepo: "https://github.com/agusrahmaan/uts-react.git"
    },
    {
        id: 3,
        image: "/react.png",
        title: "Rascal Film",
        description: "An application that provides a variety of complete and up-to-date Korean dramas.",
        linkRepo: "https://github.com/agusrahmaan/tugas-react-5.git"
    },
    {
        id: 4,
        image: "/asp.png",
        title: "Blog Aing",
        description: "Applications that can make blog notes.",
        linkRepo: "https://github.com/agusrahmaan/BlogAing.git"
    },
];
  return (
    <div className=" bg-sky-950 p-7 ">
      <div>
        <Header/>
      </div>   
      <div className="border-solid border-1 border-cyan-700 "><p className="text-blue-600 text-xl font-medium">See my recent project:</p> 
        <div className="flex-col flex gap-3 md:flex-row">      
          {
            project.map((project, index) => {
              return <Portofolio key={index} {...project}/>
            })
          }
        </div>
      </div>
      <div className="pt-5">
        <Footer/>
      </div>
    </div>
  )
}

export default App