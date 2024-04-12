import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Pagez from './pages/Pagez';
import Book from './pages/Book';
import PageError from './pages/PageError';
import Search from './pages/Search';
import RecentlyAdded from './pages/RecentlyAdded';
import Liked from './pages/Liked';
import Trending from './pages/Trending';
import History from './pages/History';
import Author from './pages/Author';
import MyLibrary from './pages/MyLibrary';
import Profile from './pages/Profile';
import ManageProfiles from './pages/ManageProfiles';
import PLayer from './pages/PLayer';


function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Pagez />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search/:keyword' element={<Search />} />
        <Route path='/recentlyadded' element={<RecentlyAdded />} />
        <Route path='/liked/:id' element={<Liked />} />
        <Route path='/myLibrary/:id' element={<MyLibrary />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/manageProfiles/:id' element={<ManageProfiles />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/history/:id' element={<History />} />
        <Route path='/author/:author' element={<Author />} />
        <Route path='/book/:id' element={<Book />} />
        <Route path='/player/:id' element={<PLayer />} />
        <Route path='/*' element={<PageError />} />
      </Routes>
    </Router>
  );
}

export default App;