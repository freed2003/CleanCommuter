import './styles/App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
