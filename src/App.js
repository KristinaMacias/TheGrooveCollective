import logo from './logo.svg';
import './App.css';
import Navbar from './components/navabar';
import About from './components/about';
import InstrumentTypes from './components/instrumenttypes';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <InstrumentTypes />
      
    </div>
  );
}

export default App;
