import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Pagez from './pages/Pagez';
import PageError from './pages/PageError';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Pagez />} />
          <Route path='/*' element={<PageError />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;