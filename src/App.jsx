import  { Suspense,React } from 'react'
import { BrowserRouter , Route, Routes ,useNavigate} from 'react-router-dom';
import {Home} from './Home'; 

import { NavBar } from './components/NavBar';
import {Signup} from './components/SignUp';
import { Footer } from './components/Footer';
import { Shop } from './components/Shop';
import { Cart } from './components/Cart';


function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
   <Routes>
     <Route path='/' element={<Suspense fallback={"loading......"}><Home></Home></Suspense>}></Route>
     <Route path='/signup' element={<Suspense fallback={"loading......"}><Signup></Signup></Suspense>}></Route>
     <Route path='/shop' element={<Suspense fallback={"loading......"}><Shop></Shop></Suspense>}></Route>
     <Route path='/cart' element={<Suspense fallback={"loading......"}><Cart></Cart></Suspense>}></Route>
   </Routes>
   <Footer></Footer>
    </BrowserRouter>
  );
}






export default App;
