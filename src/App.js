import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Home></Home>
    </div>
  );
}

export default App;
