import "./App.css";
import Login from "./Page/Login";
import ProductAll from "./Page/ProductAll";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";


function App() {

  let [authenticate, setAuthenticate] = useState(false)
  useEffect ( ()=>{
    console.log("로그인?",authenticate)
  },[authenticate])

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
        <Routes>
          <Route path="/" element={<ProductAll/>}/> 
          <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/> 
          <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/> 
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
