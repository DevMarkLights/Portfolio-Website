import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Redirect from './components/redirect';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redirect/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
