import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState("primary");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTheme("primary");
      document.body.style.backgroundColor = "rgb(11 33 55)";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setTheme("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const toggleMode1 = () => {
    if (mode === "light") {
      setMode("dark");
      setTheme("success");
      document.body.style.backgroundColor = "rgb(12 65 65)";
      showAlert("Theme 1 is enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          toggleMode1={toggleMode1}
        />
        <br />
        <br />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                heading="Enter the text to analyze"
                mode={mode}
                showAlert={showAlert}
                theme={theme}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
