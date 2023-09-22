import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';
import Logout from './Pages/Logout';

const App = () => {
  const user = useSelector(selectUser);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    {user ? <Logout/> : <Login/>}
    </BrowserRouter>
  );
}

export default App;