import { useState } from 'react';
import Alert from './Alert';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [mode2, setMode2] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode2 = () => {
    if (mode2 !== 'dark') {
      setMode2('dark');
      document.body.style.backgroundColor = '#001a09';
      // document.title = 'TextRunner - Dark Mode'

    }
    else {
      if (mode === 'dark') {
        setMode('dark');
        document.body.style.backgroundColor = '#1c1b35';
        setMode2("light");

      }
      else {
        setMode2('light');
        document.body.style.backgroundColor = 'white';
      }

    }
  }
  const toggleMode = (cls) => {
    if (mode !== 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = '#1c1b35';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextRunner - Dark Mode'
      // title can be sparked
      // setInterval(() => {
      //   document.title = "Text Runner is Amazing";
      // }, 2000);

      // setInterval(() => {
      //   document.title= "Install TextRunner Now";
      // }, 1500);
    }
    else {
      document.title = 'TextRunner - Home'
      if (mode2 === 'dark') {
        setMode("light");
        document.body.style.backgroundColor = '#001a09';
      }
      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }

      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextRunner" aboutText="About us" mode={mode} mode2={mode2} toggleMode2={toggleMode2} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Switch>
          <Route exact path="/about" component={About}>
          <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm heading="Try TextRunner - Word Counter, Character Counter, Remove Extra spaces" mode={mode} mode2={mode2} showAlert={showAlert} />
          </Route>
          <Route exact path="/Text-Runner-React">
            <TextForm heading="Try TextRunner - Word Counter, Character Counter, Remove Extra spaces" mode={mode} mode2={mode2} showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
