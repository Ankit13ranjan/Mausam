import logo from './logo.svg';
import './App.css';
import Tempapp from './components/Tempapp';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./components/About"


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
            <Route path="/" element={<Tempapp/>} />
            <Route path="/about" element={<About/>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
