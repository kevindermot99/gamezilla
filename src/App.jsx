import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageError from './pages/PageError';


function App() {


  return (
    <div className='flex flex-col h-svh'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<PageError />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;