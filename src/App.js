import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#121212";
      // document.getElementById('back').style.backgroundColor="#292929";
    }
    else{ 
      setMode('light');
      document.body.style.backgroundColor="white";
      // document.getElementById('back').style.backgroundColor="#F6F6F6";
    }
  }
  return (
    <>
      <Navbar title="Texted(it)" theme={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter text to analyse" theme={mode} />
      </div>
    </>
  );
}

export default App;
