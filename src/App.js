import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Users from './Pages/Users';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Users' element={<Users/>}/>
      <Route path='/User/:id' element={<Profile/>}/>
      <Route path='/*' element={<Error/>}/>

    </Routes>
    </div>
  );
}

export default App;
