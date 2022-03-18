import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Menu from './components/Menu';
import { CartProvider } from './contexts/Cart';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:idBook" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </>
  );
}

export default App;
