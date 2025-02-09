import About from "./About/About";
import "./App.css";
import Footer from "./Footer/Footer";
import HomeNav from "./HomeNavComponent/HomeNav";
import ProjectSection from "./ProjectSection/ProjectSection";
import SkillSection from "./SkillSection/SkillSection";

function App() {
  return (
    <>
      <HomeNav url={"/HimalayaKharate.pdf"} />
      <About />
      <SkillSection />
      <ProjectSection />
      <Footer />
    </>
  );
}

export default App;
