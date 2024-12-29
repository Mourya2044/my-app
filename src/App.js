import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

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
    if (mode === 'light') {
      let newmode = 'dark';
      setMode(newmode);
      document.documentElement.setAttribute("data-bs-theme", newmode);
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      let newmode = 'light';
      setMode(newmode);
      document.documentElement.setAttribute("data-bs-theme", newmode);
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils@" mode={ mode } toggleMode={ toggleMode } />
        <Alert alert={ alert } />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze below"
                mode={ mode }
                showAlert={ showAlert }
              />
            }
          />
          <Route
            exact
            path="/about"
            element={
              <div className="container my-3">
                <About />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
