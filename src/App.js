
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Favorites from './pages/Favorites.jsx';
import Details from './pages/Details.jsx';

function App() {
  return (
    <div>
    <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/favorites' element={<Favorites/>} />
    <Route path='/recipe-item/:id' element={<Details />} />
    
    </Routes>
    </div>
      
    </div>
  );
}

export default App;
