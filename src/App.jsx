import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Pagez from './Pagez';
import Book from './Book';



const App = () => {
  return (
    // !loading && (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/app' element={<Pagez />} />
          <Route path='/book/:id' element={<Book />} />
        </Routes>
      </BrowserRouter>
    // )
  );
};

export default App;
