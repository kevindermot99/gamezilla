import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Pagez from './Pagez';



const App = () => {
  return (
    // !loading && (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/app' element={<Pagez />} />
        </Routes>
      </BrowserRouter>
    // )
  );
};

export default App;
