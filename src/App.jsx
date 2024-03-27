import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Pagez from './Pagez';
import Book from './pages/Book';
import PageError from './pages/PageError';
import LogoDarkMode from './assets/images/Pagez_Logo__dark_mode.png'
import LogoLightMode from './assets/images/Pagez_Logo__light_mode.png'


function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // window.onload = function () {
    //   setLoading(true)
    // }
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1400);
  }, [])

  return (
    loading ? (
      <div className='w-full h-[100vh] bg-white dark:bg-dark-body flex justify-center items-center relative '>
        <img src={LogoDarkMode} className='h-20 hidden dark:block' />
        <img src={LogoLightMode} className='h-20 block dark:hidden' />
      </div>
    ) : (
      <Router>
        <Routes>
          <Route path='/' element={<Pagez />} />
          <Route path='/landingPage' element={<Landing />} />
          <Route path='/book/:id' element={<Book />} />
          <Route path='/*' element={<PageError />} />
        </Routes>
      </Router>
    )
  );
}

export default App;