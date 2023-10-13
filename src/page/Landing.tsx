import About from "../component/About";
import { Footer } from "../component/Footer";
import Form from "../component/Form";
import Home from "../component/Home";
import Navbar from "../component/Navbar";
import Skills from "../component/Skills";

const Landing = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <Skills />
      <About />
      {/* <Technologies /> */}
      <Form />
      <Footer />
    </main>
  );
};

export default Landing;
