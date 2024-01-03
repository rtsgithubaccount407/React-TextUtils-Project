import React, { useState } from "react";
import TextForm from "./TextForm.js";
import Navbar from "./Navbar.js";
import Alert from "./Alert.js";
import About from "./About.js";
// import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import {Routes,Route} from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // new function create esme massage and type likha huaa h jo ki yah fun ha call back a use kar skte h
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1200);
  };

  function toggleButton() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000000";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Utils - Install Now";
      setInterval(() => {
        document.title = "Text Utils - Install Now";
      }, 2000);
      setInterval(() => {
        document.title = "Text Utils - Install Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success"); // call a fun and alert  ko props ke thrrow use kar skte h other fun m alert this use as a value
    }
  }
  return (
    //  <BrowserRouter>
    //     <Routes>
    // <Router>
    //   <div>
    //     <Navbar mode={mode} toggleButton={toggleButton} />

    //     <Alert alert={alert} />
    //     <Switch>
    //       <Route path="/">
    //         <TextForm mode={mode} showAlert={showAlert} />
    //       </Route>

    //       <Route path="/about">
    //         <About />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>

    <div>
      <Navbar mode={mode} toggleButton={toggleButton} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/about" element={<About mode={mode} />} />

        <Route
          path="/"
          element={<TextForm mode={mode} showAlert={showAlert} />}
        />
      </Routes>
    </div>
  );
};

export default App;
