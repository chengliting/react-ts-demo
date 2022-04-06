import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './container/Main';
import Mine from './container/Mine';
import NotFound from './container/NotFound';
import './App.scss';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Mine" element={<Mine />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

  

export default App;
