import logo from './logo.svg';
import './App.css';
import Login from './container/login/login';
import Signin from './container/signin/signin';
import {Routes,Route} from 'react-router-dom';
import Dashboard from './container/dashboard/dashboard';
import Changepassword from './container/update/passwordupdate';
import { ImageUpload } from './container/imageupload/imageupload';
import Addproduct from './container/Addproduct/addproduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './container/Home/Home';
import ResponsiveAppBar from './container/navbar/navbar';
import ShowProducts from './container/product/showproducts';
import About from './container/about/about';
import Contactus from './container/about/contactus';
import UpdateProducts from './container/Addproduct/updateProduct';


function App() {
  return (
    <div className="App">
      
      {/* <ResponsiveAppBar/> */}
      {/* <div><h1>Full stack web</h1></div>
      <div>
        
        <a href='/dashboard'>
          Dashboard
        </a>
        <a href="/imageupload">
          Imageupload
        </a>
        <a href="/changepassword">
          Changepassword
        </a>
      </div> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/imageupload' element={<ImageUpload/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/changepassword' element={<Changepassword/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/updateproduct' element={<UpdateProducts/>}/>
        <Route path="/product" element={<ShowProducts/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        {/* about , contact us --> create 2 components*/}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
