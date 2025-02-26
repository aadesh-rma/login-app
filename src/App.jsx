import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ProtectedRoutes from './components/ProtectedRoutes.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );
  
  

  useEffect(() => { 
    localStorage.setItem("isAuthenticated",JSON.stringify(isAuthenticated)); 
  }, [isAuthenticated])
  
  return (
    <Router>
      <div>
        <header>
       <h1>My Login Page</h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}></Route>
          <Route path='/dashboard' element={
            <ProtectedRoutes isAuthenticated={isAuthenticated}>
              <Dashboard isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoutes>
            }></Route>
        </Routes>
        
      </main>
      </div>
      

    </Router>

  )
}