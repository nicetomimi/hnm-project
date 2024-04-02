import "./App.css";
import Login from "./Page/Login";
import ProductAll from "./Page/ProductAll";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./route/PrivateRoute";


function App() {

  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<ProductAll/>}/> 
          <Route path="/login" element={<Login/>}/> 
          <Route path="/product/:id" element={<PrivateRoute/>}/> 
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
