
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';
import Registeration from './components/Registeration';


function App() {
  return (
< BrowserRouter>
<Navbar/>
<Routes>
  <Route  path='/' element={<Home/>} />
  <Route  path='/register'  element={<Register/>} />
  <Route path='/registeration' element={<Registeration/>} />
  <Route path='/edit/:id' element={<Edit/>}/>
  <Route path='/details/:id' element={<Details/>} />
</Routes>
</BrowserRouter>
  );
}

export default App;
