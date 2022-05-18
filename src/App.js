import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navabar';
import About from './components/about';
import Footer from './components/footer';
import GrooveboxRack from './components/groovebox-sampler';
import FeaturedSections from './components/featuredsections'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <About />
        <FeaturedSections />
        <GrooveboxRack />
        <Footer />
      </div>
    )
  }
}

export default App;


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <About />
//       <InstrumentTypes />
//       <GrooveboxRack />
//       <Footer />
//     </div>
//   );
// }

// export default App;
