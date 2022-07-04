import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState({});

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert({})
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#121212";
      // document.getElementById('back').style.backgroundColor="#292929";
      showAlert("Dark mode enabled","success");
    }
    else{ 
      setMode('light');
      document.body.style.backgroundColor="white";
      // document.getElementById('back').style.backgroundColor="#F6F6F6";
      showAlert("Dark mode disabled","success");

    }
  }
  return (
    <>
      <Navbar title="Texted(it)" theme={mode} toggleMode={toggleMode} />
      {alert.msg && <Alert alert={alert} setAlert = {setAlert}/>}
      <div className="container my-3">
        <TextForm heading="Enter text to analyse" theme={mode} />
      </div>
    </>
  );
}

export default App;
