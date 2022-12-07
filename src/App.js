import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Sidenav from './components/sideNav';
import AddDeveloper from './components/addDeverloper';
import Reservations from './components/reservations';
import Developers from './components/developers';
import DeleteDeveloper from './components/deleteDeveloper';
import Login from './components/authentication/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidenav />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Developers />} />
          <Route path="/adddeveloper" element={<AddDeveloper />} />
          <Route path="/deletedeveloper" element={<DeleteDeveloper />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
