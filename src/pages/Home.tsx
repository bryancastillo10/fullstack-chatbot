import Navbar from "../landingpage/Navbar";
import Hero from "../landingpage/Hero";
import About from "../landingpage/About";
import Technology from "../landingpage/Technology";
import Footer from "../landingpage/Footer";

const Home = () => {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <About/>
      <Technology/>
      <Footer/>
    </section>
  )
}

export default Home;
