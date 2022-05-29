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
import NotFound from './Pages/Shared/NotFound';
import RequireAuth from './Pages/Login/RequireAuth';
import Orders from './Pages/Dashboard/Orders/Orders';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<Orders />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="my-profile" element={<MyProfile />} />
        </Route>
        <Route path="/parts/:id" element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
