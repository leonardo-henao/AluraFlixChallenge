import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer position='bottom-right' />
      <Footer />
    </>
  );
}

export default App;
