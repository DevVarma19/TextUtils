import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [darkMode, setdarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const toggleMode = () => {
    if(darkMode) {
      setdarkMode(false);
      document.body.style.backgroundColor = 'white';
      document.body.style.Color = 'black';
      document.title = 'TextUtils - LightMode';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';
      // }, 700);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1000);
      showAlert("Light mode has been enabled", "success");
    } else {
      setdarkMode(true);
      document.body.style.backgroundColor = 'gray';
      document.body.style.Color = 'white';
      document.title = 'TextUtils - DarkMode';
      showAlert("Dark mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={darkMode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
            <TextForm heading="Enter text to analyze" mode={darkMode}/>
            </Route>
        </Switch>
      {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
