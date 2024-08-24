import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import {Routes,Route} from 'react-router-dom';
import Login from "./components/Login";
import Card from "./components/Card";
import Product from "./components/Product";
export default function App() {
  return (
   <div>
    <Navbar/>
    <Routes>
<Route path='/' element={<HeroPage/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/Product' element={<Product/>}></Route>
<Route path='Product/:id' element={<Card/>}></Route>
</Routes>
    <Footer/>
    
   </div>
   
  )
}