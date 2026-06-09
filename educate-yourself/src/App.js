import logo from './logo.svg';
import Login from './pages/Auth/login/Login';
import Home from './pages/Home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
