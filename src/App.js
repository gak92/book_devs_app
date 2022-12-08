import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidenav from './components/sideNav';
import AddDeveloper from './components/addDeverloper';
import Reservations from './components/reservations';
import DisplayAllDevs from "./components/devs/displayAllDevs";
import DeleteDeveloper from './components/deleteDeveloper';
import Login from './components/authentication/login';
import Register from './components/authentication/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidenav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<DisplayAllDevs />} />
          <Route path="/adddeveloper" element={<AddDeveloper />} />
          <Route path="/deletedeveloper" element={<DeleteDeveloper />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
