import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage/Home';
import Navbar from './AppComponents/NavBar/Navbar';
import SideBar from './AppComponents/SideBar/SideBar';
import Client from './Pages/ClientPage/Client';
function App() {
  return (
    <BrowserRouter>
    <div className='mainBox'>
    <Navbar/>
    <div className='subBox'>
    <SideBar/>
    <div className='dynamicBox'>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/client" element={<Client/>}> </Route>
    </Routes>
  </div>
  </div>
  </div>
  </BrowserRouter>
  );
}

export default App;
