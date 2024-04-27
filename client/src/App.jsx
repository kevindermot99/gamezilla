import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageError from './pages/PageError';
import Login from './pages/Login';


function App() {


  return (
    <div className='flex flex-col h-svh'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<PageError />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;