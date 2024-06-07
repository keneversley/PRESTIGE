
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  Renter  from './Pages/Renter';
import { RenterCategory } from './Pages/RenterCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Renter/>}>
          <Route path='/manor' element={<RenterCategory category='manor'/>}/>
          <Route path='/oasis' element={<RenterCategory category='oasis'/>}/>
          <Route path='/mira' element={<RenterCategory category='mira'/>}/>
          <Route path='/celine' element={<RenterCategory category='celine'/>}/>
          <Route path='/luna' element={<RenterCategory category='luna'/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>


      </Routes>
      </BrowserRouter>
      
     
       
    </div>
  );
}

export default App;
