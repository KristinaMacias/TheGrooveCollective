import logo from './logo.svg';
import './App.css';
import Navbar from './components/navabar';
import About from './components/about';
import InstrumentTypes from './components/instrumenttypes';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <InstrumentTypes />
      <Footer />
    </div>
  );
}

export default App;
