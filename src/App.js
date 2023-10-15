
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import React, { useState } from 'react';

// ye sab router wali cheeze git pe ache se kam nhi karti isliye isko hata do deploy karne se pehle
// import {
//   BrowserRouter as Router,
//   Routes,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [darkMode, setdarkMode] = useState('light'); // whether dark mode is enabled

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  // const removeBodyclasses = () => {
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-secondary');
  //   document.body.classList.remove('bg-danger');
  // }
  const toggleMode = (cls) => {
    // when we use classList.add it adds the class but in order to use the next color we need to remove 
    // the previous one
    // removeBodyclasses();
    // document.body.classList.add('bg-' + cls);
    if (darkMode === 'light') {
      setdarkMode('dark');
      document.body.style.backgroundColor = '#072942';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setdarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="Text Utils2" AboutText="About us" mode={darkMode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* we will use container to place the object inside it in the middle */}
      <div className="container">
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
        <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={darkMode} />
        {/* </Route>
          </Switch> */}



      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
