import React from "react";
import './App.css';
import Additem from "./Components/Additem";
import { Routes,Route } from "react-router-dom";
import DisplayData from "./Components/DisplayData";
import Preview from "./Components/Preview";
import Reorder from "./Components/Reorder";

function App() {
  return (
   <>
   <Routes>
    
    <Route path="/" element={ <Additem/>}/>
    <Route path="/displaydata" element={ <DisplayData/>}/>
    <Route path="/reorder" element={ <Reorder/>}/>
    

   </Routes>
   <Preview/>
   
     
    </>
  );
}

export default App;
