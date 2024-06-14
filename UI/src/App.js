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


function App() {
  return (
    <div className="App">
      <div><h1>Full stack web</h1></div>
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
      </div>
      <Routes>
        <Route path='/imageupload' element={<ImageUpload/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/changepassword' element={<Changepassword/>}/>
        <Route path='/Addproduct' element={<Addproduct/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
