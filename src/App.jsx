import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Cart } from './pages/cart/cart'
import { Shop } from './pages/shop/shop'
import { Contact } from "./pages/contact";
import { ShopContextProvider } from "./context/shop-context";


function App() {
    return (
      <div className="App">
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
    );
  }

export default App
