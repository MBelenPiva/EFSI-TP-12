import './App.css';
import Home from "./componentes/Home";
import GoToShop from "./componentes/GoToShop";
import Contact from "./componentes/Contact";
import ProductosProvider from './context/ProductosContext';

import{
  BrowserRouter as Router,
  Routes,
  Route  
} from "react-router-dom";


function App() {
  return (    
  <ProductosProvider>
    <Router>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/shop" element={<GoToShop/>} />
            <Route exact path="/contact" element={<Contact/>} />
          </Routes>
      </div>
    </Router>
    </ProductosProvider>
  );
}

export default App;



