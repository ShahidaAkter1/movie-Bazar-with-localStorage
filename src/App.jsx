import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css'
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [watchTime, setWatchTime] =useState("");
  const handleWatchTime =(time) =>{
    // console.log(time);

    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum);
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };

  return (
    <div className="App">
     <Header></Header>
     <div className="main row mt-5">
      <div className="home-container col-md-8">
        <Home handleWatchTime={handleWatchTime}></Home>
      </div>
      <div className="sideCart col-md-4 card">
        <SideCart watchTime={watchTime}></SideCart>
      </div>
     </div>
     <Contact></Contact>
     <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
