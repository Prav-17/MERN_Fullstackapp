import logo from './logo.svg';
import './App.css';
import Login from './container/login/login';
import Signin from './container/signin/signin';
import {Routes,Route} from 'react-router-dom';
import Dashboard from './container/dashboard/dashboard';
import Changepassword from './container/update/passwordupdate';

function App() {
  return (
    <div className="App">
      <div><h1>Full stack web</h1></div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/changepassword' element={<Changepassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
