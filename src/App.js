/*THIS IS CODED BY: RYHLE NODNYLSON GUINTO - 301356103 September 28, 2024
FILE NAME: app.js*/
import NavBar from "./components/NavBar/navigationbar";
import Intro from "./components/Intro/intro"
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
