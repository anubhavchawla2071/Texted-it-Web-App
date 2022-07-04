import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState({});

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert({});
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      // document.getElementById('back').style.backgroundColor="#292929";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.getElementById('back').style.backgroundColor="#F6F6F6";
      showAlert("Dark mode disabled", "success");
    }
  };
  return (
    <>
      {alert.msg && <Alert alert={alert} setAlert={setAlert} />}
      <Router>
      <Navbar title="Texted(it)" theme={mode} toggleMode={toggleMode} />

        <Routes>
          <Route exact path="/about" element={<About theme={mode} />} />
          <Route
            exact path="/"
            element={
              <div className="container my-3">
                <TextForm heading="Enter text to analyse" theme={mode} />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
