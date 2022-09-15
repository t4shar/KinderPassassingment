import './App.css';
import Home from './Components/Home';
import Loginform from './Components/Loginform';
import Signupform from './Components/Signupform';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <>
  {/* <Signupform/> */}
      <Router>
      <Routes>
          <Route path="/" element={<Signupform/>} />
          <Route path="/login" element={<Loginform/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
    </Router>
  </>
  );
}

export default App;
