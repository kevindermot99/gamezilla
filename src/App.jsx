import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Pagez from './Pagez';
import Book from './pages/Book';
import PageError from './pages/PageError';
import Search from './pages/Search';
import RecentlyAdded from './pages/RecentlyAdded';
import Liked from './pages/Liked';
import Trending from './pages/Trending';
import History from './pages/History';
import Author from './pages/Author';


function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Pagez />} />
          <Route path='/landingPage' element={<Landing />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recentlyadded' element={<RecentlyAdded />} />
          <Route path='/liked/:id' element={<Liked />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/history/:id' element={<History />} />
          <Route path='/author/:author' element={<Author />} />
          <Route path='/book/:id' element={<Book />} />
          <Route path='/*' element={<PageError />} />
        </Routes>
      </Router>
  );
}

export default App;