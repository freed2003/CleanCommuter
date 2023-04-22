import './styles/App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <main className='main'>
        <Home/>
      </main>
    </div>
  );
}

export default App;
