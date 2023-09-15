// import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;