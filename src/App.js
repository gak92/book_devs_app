import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidenav from './components/sideNav';
import Reservations from './components/reservations';
import DisplayAllDevs from './components/devs/displayAllDevs';
import Login from './components/authentication/login';
import Register from './components/authentication/register';
import AddDeveloper from './components/devs/addDeveloper';
import AddReservations from './components/AddReservations';
import DevDtails from './components/devDetails';
import Splash from './components/splash';

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
              <Route path="/" element={<DisplayAllDevs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/home"
                element={
                  <Splash />
                }
              />
              <Route path="/developers" element={<DisplayAllDevs />} />
              <Route path="/adddeveloper" element={<AddDeveloper />} />
              <Route
                path="/deletedeveloper"
                element={<h1>Delete Developer</h1>}
              />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/developers/:dId" element={<DevDtails />} />
              <Route
                path="/developers/:id/add_reservation"
                element={<AddReservations />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
