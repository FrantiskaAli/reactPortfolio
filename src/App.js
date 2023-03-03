import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Header';
import Home from './components/HomePage';
import Projects from './components/ProjectsPage';
import Contact from './components/ContactPage';





function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <NavBar />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    
    </div>
  );
}

export default App;
