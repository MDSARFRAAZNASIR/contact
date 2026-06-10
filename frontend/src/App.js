
import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AddContact from './Components/AddContact';
import UpdateContact from './Components/UpdateContact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingUp from './Components/SingUp';
import LogIn from './Components/LogIn';

function App() {
  let vari="sarfraaz";
  return (
    <div>
      
          <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Contact/>}></Route>
        <Route path='addcontact' element={<AddContact/>}></Route>
        <Route path='updatecontact/:id' element={<UpdateContact/>}></Route>
      </Routes>
      <Routes>
        <Route  path='singup' element={<SingUp/>}></Route>
        <Route  path='login' element={<LogIn/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
    
  );
}

export default App;


