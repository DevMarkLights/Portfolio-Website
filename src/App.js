import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Redirect from './components/redirect';
import Navbar from './components/Navbar'
import Resume from './pages/resume';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Redirect/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
