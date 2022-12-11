import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidenav from './components/sideNav';
import Reservations from './components/reservations';
import DisplayAllDevs from './components/devs/displayAllDevs';
import Login from './components/authentication/login';
import Register from './components/authentication/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* two auto columns */}
        <div className="d-flex">
          <div className="flex-shrink-0">
            <Sidenav />
          </div>
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<h1 className="text-center">Welcome to Book a Developer</h1>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/developers" element={<DisplayAllDevs />} />
              <Route path="/adddeveloper" element={<h1>Add Developer</h1>} />
              <Route path="/deletedeveloper" element={<h1>Delete Developer</h1>} />
              <Route path="/reservations" element={<Reservations />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
