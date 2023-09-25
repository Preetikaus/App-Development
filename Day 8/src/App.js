import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Logout from './Pages/Logout';
import Booking from './Pages/Booking';
import UserDetails from './Pages/UserDetails';

const App = () => {
  const user = useSelector(selectUser);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/Booking" element={<Booking />}></Route>
        <Route path="/UserDetails" element={<UserDetails />}></Route>
      </Routes>
    {user ? <Logout/> : <Login/>}
    </BrowserRouter>
  );
}

export default App;