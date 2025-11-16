import Home from "../components/Home";
import About from "../components/About";
import Capabilities from "../components/Capabilities";
import Highlights from "../components/Highlights";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main >
      <Home />
      
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
      <Footer />
    </main>
  );
}
