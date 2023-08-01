
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePostPage from './CreatePostPage';
import Nav from './pages/Nav';
import { useState } from 'react';

function App() {
  const [isAuth, setisAuth] = useState(localStorage.getItem("isAuth"));
  return (
   <>
   <Nav isAuth={isAuth} setisAuth={setisAuth}/>
   <Routes>
    <Route path='/' element={<Home isAuth={isAuth} />}/>
    <Route path='/login' element={<Login setisAuth={setisAuth}/>}/>
    <Route path='/createpost' element={<CreatePostPage isAuth={isAuth} />}/>
   </Routes>
   </>
  );
}

export default App;
