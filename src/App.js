import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Laptops from './pages/Laptops';
import Monitors from './pages/Monitors';
import Pcgaming from './pages/Pcgaming';
import Vr from './pages/Vr';
import Desktops from './pages/Desktops';
import Software from './pages/Software';
import Navbar from './components/Navbar';
import Signin from './pages/Signin';
import { useState } from 'react';

function App() {
  const [searchVal,setSearchVal] = useState("")
  return (
    <BrowserRouter>
    <Navbar searchVal={setSearchVal}/>
    <Routes>
      <Route path='/' element={<Home searchVal={searchVal}/>} />
      <Route path='/laptops' element={<Laptops/>} />
      <Route path='/monitors' element={<Monitors/>} />
      <Route path='/pcgaming' element={<Pcgaming/>} />
      <Route path='/mixed_reality' element={<Vr/>} />
      <Route path='/desktops' element={<Desktops/>} />
      <Route path='/software' element={<Software/>} />
      <Route path='/signin' element={<Signin/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
