import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Pagez from './pages/Pagez';
import PageError from './pages/PageError';
import Player from './components/Player';


function App() {


  return (
    <div className='flex flex-col h-svh'>
      <Router>
        <Routes>
          <Route path='/' element={<Pagez />} />
          <Route path='/*' element={<PageError />} />
        </Routes>
      </Router>

      <Player />
    </div>
  );
}

export default App;