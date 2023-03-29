import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';

function App() {
  

  return (
    <div className="App">
     <Header></Header>
     <div className="main row mt-5">
      <div className="home-container col-md-8">
        <Home></Home>
      </div>
      <div className="sideCart col-md-4 card">
        <SideCart></SideCart>
      </div>
     </div>
     <Contact></Contact>
    </div>
  )
}

export default App
