import { Element } from "react-scroll";
import AboutPage from "./components/AboutPage";
import Landing from "./components/Landing";
import Layout from "./components/Layout";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <Layout>
      <Element name="home">
        <Landing />
      </Element>
      <Element name="about">
        <AboutPage />
      </Element>
      <Element name="resume">
        <Resume />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </Layout>
  );
}

export default App;
