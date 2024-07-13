
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  Home  from './Pages/Home';
import { HomeCategory } from './Pages/HomeCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import nightlife_banner from './Components/Assets/banner_nightlife.jpeg';
import restaurant_banner from './Components/Assets/banner_restaurants.jpeg';
import mansion_banner from './Components/Assets/banner_mansion.jpeg';
import exotic_banner from './Components/Assets/banner_exotic.jpeg';
import yachts_banner from './Components/Assets/banner_yachts.jpeg';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='/restaurant' element={<HomeCategory banner={restaurant_banner} category="restaurants"/>}/>
        <Route path='/nightlifes' element={<HomeCategory banner={nightlife_banner} category="nightlife"/>}/>
          <Route path='/mansions' element={<HomeCategory banner={mansion_banner} category="mansion"/>}/>
          <Route path='/exotics' element={<HomeCategory banner={exotic_banner} category="exotic"/>}/>
          <Route path='/yacht' element={<HomeCategory banner={yachts_banner} category="yacths"/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>     
    </div>
  );
}

export default App;
