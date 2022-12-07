import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddReservations from './components/AddReservations';

function App() {
  return (
    <Routes>
      <Route path="/add_reservation" element={<AddReservations />} />
    </Routes>
  );
}

export default App;
