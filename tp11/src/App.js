import './App.css';
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import SlideShop from "./componentes/SlideShop";
import InstagramBox from "./componentes/InstagramBox";
import Search from "./componentes/Search";
import AboutBox from "./componentes/AboutBox";
import ContactBox from "./componentes/ContactBox";
import ProductsBox from "./componentes/ProductsBox";
import Shop from "./componentes/Shop";
import TitleContactsBox from "./componentes/TitleContactsBox";
import TitleShopBox from "./componentes/TitleShopBox";
import Home from "./componentes/Home";
import GoToShop from "./componentes/GoToShop";
import Contact from "./componentes/Contact";

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";




function App() {
  return (    
    <Router>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/shop" element={<GoToShop/>} />
            <Route exact path="/contact" element={<Contact/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;



