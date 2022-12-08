import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidenav from './components/sideNav';
import Reservations from './components/reservations';
import DisplayAllDevs from './components/devs/displayAllDevs';
import Login from './components/authentication/login';
import Register from './components/authentication/register';
import Splash from './components/splash';
import AddDeveloper from './components/devs/addDeveloper';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidenav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Splash />} />
          <Route path="/developers" element={<DisplayAllDevs />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/adddeveloper" element={<AddDeveloper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
