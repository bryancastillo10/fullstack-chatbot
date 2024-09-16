import Navbar from "../landingpage/Navbar";
import Hero from "../landingpage/Hero";
import About from "../landingpage/About";
import Technology from "../landingpage/Technology";
import Services from "../landingpage/Services";
import Contact from "../landingpage/Contact";
import Sponsor from "../landingpage/Sponsor";
import Footer from "../landingpage/Footer";

const LandingPage = () => {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <About/>
      <Technology/>
      <Services/>
      <Contact/>
      <Sponsor
        header="Building a Greener Future with Trusted Partners"
        backgroundClass="bg-black"
        />
      <Footer/>
    </section>
  )
}

export default LandingPage;
