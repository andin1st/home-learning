import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
    const title = 'Welcome to the new blog';
  return (
    <div className="App">
      <Navbar />
      <header className="content">
        <Home />
      </header>
    </div>
  );
}

export default App;
