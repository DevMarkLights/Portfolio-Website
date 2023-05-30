import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Redirect from './components/redirect';
import Navbar from './components/Navbar'
import Resume from './pages/resume';
import About from './pages/about';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Redirect/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
