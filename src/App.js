import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
