import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup"
import SymbiEat from './pages/SymbiEat';
import Cart from "./pages/Cart"
import Stationery from './pages/Stationery';
import Rangoli from './pages/Rangoli';
import { useState } from 'react';
function App() {
  const [message, setMessage] = useState(null);
  const [cartItems, setCartItems] = useState(null);
  console.log(cartItems)
  // let cartItems = [];
  const addItems = (name, image, price) => {
    const item = {
      name: name,
      image: image,
      price: price
    }
    if(cartItems !== null) {

      setCartItems(oldArray => [...oldArray, item])
    } 
    else {
      setCartItems([item])
    }
    console.log(cartItems)
  }
  // const deleteItems = () => {
  //   cartItems = []
  // }
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home message={message} setMessage={setMessage} />} />
          <Route exact path="/login" element={<Login message={message} setMessage={setMessage} />} />
          <Route exact path="/signup" element={<Signup message={message} setMessage={setMessage} />} />
          <Route exact path="/symbi-eat" element={<SymbiEat addItems={addItems} cartItems={cartItems} message={message} setMessage={setMessage} />} />
          <Route exact path="/cart" element={<Cart cartItems={cartItems} message={message} setCartItems={setCartItems} setMessage={setMessage} />} />
          <Route exact path="/stationery" element={<Stationery addItems={addItems} cartItems={cartItems} message={message} setMessage={setMessage} />} />
          <Route exact path="/rangoli" element={<Rangoli addItems={addItems} cartItems={cartItems} message={message} setMessage={setMessage} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
