import "./App.css";
import Login from "./Page/Login";
import ProductAll from "./Page/ProductAll";
import ProductDetail from "./Page/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';



//1. [페이지] 전체상품페이지, 로그인페이지, 상품상세페이지
//1-1. [네브바]
//2. [로그인] 로그인 버튼 클릭시/ 상품클릭했을때 로그인 안되어있을 경우
//3. 로그아웃 버튼 누르면 로그아웃, 로그인<>로그아웃 버튼 변경
//4. [검색] 상품을 검색할 수 있음

function App() {
  return (
    <div>
      <Navbar/> 
        <Routes>
          <Route path="/" element={<ProductAll/>}/> 
          <Route path="/login" element={<Login/>}/> 
          <Route path="/product/:id" element={<ProductDetail/>}/> 
        </Routes>
    </div>
  );
}

export default App;
