import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inventory from './Pages/Home/Inventory/Inventory';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/parts/:id" element={<Inventory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
