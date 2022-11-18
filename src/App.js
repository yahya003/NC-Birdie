import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Captured from './Components/Captured';
import Profile from './Components/Profile';
import Capture from './Components/Capture';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import ForgotPassword from './Components/ForgotPassword';
import ErrorPage from './Components/ErrorPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
      <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
        <Route path="/capture" element={<ProtectedRoute><Capture/></ProtectedRoute>}></Route>
        <Route path="/captured" element={<ProtectedRoute><Captured/></ProtectedRoute>}></Route>
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
      </UserAuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
