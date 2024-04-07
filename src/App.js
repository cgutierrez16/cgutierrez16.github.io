import './App.css'
import bootstrap from 'bootstrap'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { NBATracker } from './pages/NBATracker'
import { Crypto } from './pages/Crypto'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="App base">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/nbatracker' element={<NBATracker />} />
            <Route path='/projects/crypto-tracker' element={<Crypto />} />
            <Route path='/about' element={<About />} />            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
