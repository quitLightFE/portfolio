import AboutPage from "./components/AboutPage";
import Landing from "./components/Landing";
import Layout from "./components/Layout";
import Resume from "./components/Resume";

function App() {
  return (
    <Layout>
      <Landing />
      <AboutPage />
      <Resume />
    </Layout>
  );
}

export default App;
