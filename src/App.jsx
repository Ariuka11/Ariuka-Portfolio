import Topbar from "./components/Topbar/Topbar";
import Intro from './components/Intro/Intro'
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import './app.scss'

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;