import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './container/Home';
import Mine from './container/Mine';
import Pages from './container/Pages';
import NotFound from './container/NotFound';
import './App.scss';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Mine" element={<Mine />} />
        <Route path="Pages" element={<Pages />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

  

export default App;
