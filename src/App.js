import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Captured from './Components/Captured';
import Profile from './Components/Profile';
import Capture from './Components/Capture';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navigation/>
      <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/capture" element={<Capture/>}></Route>
        <Route path="/captured" element={<Captured/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
