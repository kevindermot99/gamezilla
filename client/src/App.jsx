import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageError from './pages/PageError';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Vcode from './pages/Vcode';
import Game from './pages/Game';

function App() {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game/:id' element={<Game />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/vcode/:id' element={<Vcode />} />
          <Route path='/*' element={<PageError />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
