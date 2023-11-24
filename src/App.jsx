import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react"
import './App.css'
import Home from './pages/Home';
import Eleves from './pages/Eleves';
import Details from './pages/Details';


function App() {
  const [currentPage, setCurrent]= useState("/")
  const [selectedStudent, setselectedStudent] = useState(null)

  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home currentPage={currentPage}/>}/>
          <Route path={"/eleves"} element={<Eleves/>}/>
          <Route path="/details" element={<Details selectedStudent={selectedStudent}/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

