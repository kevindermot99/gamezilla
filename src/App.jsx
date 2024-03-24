import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Pagez from './Pagez';
import Book from './Book';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/app' element={<Pagez />} />
        <Route path='/book/:id' element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;