import logo from './logo.svg';
import './App.css';
import Navbar from './components/navabar';
import About from './components/about';
import InstrumentTypes from './components/instrumenttypes';
import Footer from './components/footer';
import GrooveboxRack from './components/groovebox-sampler';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <InstrumentTypes />
      <GrooveboxRack />
      <Footer />
    </div>
  );
}

export default App;
