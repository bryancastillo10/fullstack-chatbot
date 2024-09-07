import Navbar from "../landingpage/Navbar";
import Hero from "../landingpage/Hero";
import About from "../landingpage/About";
import Technology from "../landingpage/Technology";
import Services from "../landingpage/Services";
import Footer from "../landingpage/Footer";

const Home = () => {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <About/>
      <Technology/>
      <Services/>
      <Footer/>
    </section>
  )
}

export default Home;
