import './App.css';
import Home from "./componentes/Home";
import GoToShop from "./componentes/GoToShop";
import Contact from "./componentes/Contact";
import ProductosProvider from './ProductosContext';

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



