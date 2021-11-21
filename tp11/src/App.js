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
  Switch,
  Route,
  Link

} from "react-router-dom";


function App() {
  return (
    <>

      
        < Home></Home>


      
      < GoToShop></GoToShop>
     
    
     
      < Contact></Contact>
  
    
    
    


< InstagramBox></ InstagramBox>
< Footer></ Footer>


</>
  );
}

export default App;



