import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Redirect from './components/redirect';
import Navbar from './components/Navbar'
import Resume from './pages/resume';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Article from './pages/article';
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
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/articles' element={<Article/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
