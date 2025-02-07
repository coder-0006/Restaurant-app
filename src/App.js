import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Pagenotfound from './pages/Pagenotfound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="*" element={<Pagenotfound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
