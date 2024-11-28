import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Reports from './pages/Reports';
import AddReport from './pages/AddReport';
import ReportDetails from './pages/ReportDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Reports />} />
        <Route path="/add-report" element={<AddReport />} />
        <Route path="/report/:id" element={<ReportDetails />} />
      </Routes>
    </Router>
  )
}

export default App
