import logo from './logo.svg';
import './App.css';
import Login from './container/login/login';
import Signin from './container/signin/signin';

function App() {
  return (
    <div className="App">
      <div><h1>Full stack web</h1></div>
      <Login/>
      {/* <Signin/> */}
    </div>
  );
}

export default App;
