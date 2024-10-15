import Footer from "../../components/Footer";
import LandingContent from "../../components/LandingContent";
import Navbar from "../../components/Navbar";

const LandingPage = () => {
  document.title = "Synthesise Me";
  return (
    <>
      <Navbar/>
      <LandingContent/>
      <Footer/>
    </>
  );
};

export default LandingPage;
