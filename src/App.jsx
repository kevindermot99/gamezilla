import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Pagez from './Pagez';
import Book from './pages/Book';
import PageError from './pages/PageError';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Pagez />} />
        <Route path='/landingPage' element={<Landing />} />
        <Route path='/book/:id' element={<Book />} />
        <Route path='/*' element={<PageError />} />
      </Routes>
    </Router>
  );
}

export default App;