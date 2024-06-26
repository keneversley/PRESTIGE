
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  Home  from './Pages/Home';
import { RenterCategory } from './Pages/RenterCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/restaurants' element={<RenterCategory category='restaurants'/>}/>
          <Route path='/nightlife' element={<RenterCategory category='nightlife'/>}/>
          <Route path='/mansion' element={<RenterCategory category='mansion'/>}/>
          <Route path='/exoticcars' element={<RenterCategory category='exoticcars'/>}/>
          <Route path='/yachts' element={<RenterCategory category='yachts'/>}/>
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
