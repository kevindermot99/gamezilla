import react, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageError from './pages/PageError';
import Login from './pages/Login';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check localStorage for user token when the component mounts
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user state if token is found
    }
  }, []);

  // Function to handle user login
  const handleUserLogin = (userData) => {
    setUser(userData); // Set user state
    localStorage.setItem('user', JSON.stringify(userData)); // Store user token in localStorage
  };

  // Function to handle user logout
  const handleUserLogout = () => {
    setUser(null); // Clear user state
    localStorage.removeItem('user'); // Remove user token from localStorage
  };

  return (
    <div className='flex flex-col h-svh'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login handleUserLogin={handleUserLogin} />} />
          <Route path='/*' element={<PageError />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;