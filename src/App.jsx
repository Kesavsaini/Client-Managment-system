import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage/Home';
import Navbar from './AppComponents/NavBar/Navbar';
import SideBar from './AppComponents/SideBar/SideBar';
import Client from './Pages/ClientPage/Client';
import TaskPage from './Pages/TaskPage/TaskPage';
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
      <Route path="/tasks" element={<TaskPage/>}> </Route>
    </Routes>
  </div>
  </div>
  </div>
  </BrowserRouter>
  );
}

export default App;
