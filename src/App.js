import React from 'react';
import './App.css';
import Navbar from './components/header';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Accueil from './pages/index';
import Contact from './pages/Contact';
import Therecette from './pages/Therecette';
import Recherche from './pages/Recherche';


function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/Accueil" element={<Accueil/>} />
        <Route path="/Therecette" element={<Therecette/>} />
        <Route path="/Recherche" element={<Recherche/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
