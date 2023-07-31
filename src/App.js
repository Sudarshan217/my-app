import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import Introduction from './Components/Router Tutorial/Introduction';
// import PageComponents from './Components/Router Tutorial/PageComponents';
// import LinkComponent from './Components/Router Tutorial/LinkComponent';
// import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Routes } from 'react-router-dom';
// import Newbar from './Components/Newbar';
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import{BrowserRouter, Route, Routes} from "react-router-dom";
// import Introduction from './React Router V6 tutorial/Introduction';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, darkMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (type, message) => {
      setAlert({
        type: type,
        message: message
      })
      setTimeout(function () {
        setAlert(null)
      }, 1500);
    }
    const toggleMode = () => {
      if (mode === "light") {
        darkMode("dark");
        document.body.style.backgroundColor = "grey";
        showAlert("success", "Enable Dark Mode");
        document.title = 'TextUtils-Dark Mode'
        // setInterval(() => {
        //   document.title = 'TextUtils-Update Dark Mode'
        // }, 1500);
        // setInterval(() => {
        //   document.title = 'TextUtils-Update Light Mode'
        // }, 2000);
      }
      else {
        darkMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("success", "Enable Light Mode");
        document.title = 'TextUtils-Light Mode'

      }
  }
  return (
    <>
      {/* <BrowserRouter>  */}
    <Navbar title='Components' aboutText='About Us' mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    {/* <Navbar/> */}
     {/* <Routes> */}
      {/* <Route path='/about' element={<About/>}/> */}
      {/* <Route path='/' element={<Textform showAlert={showAlert} heading='Enter text to analyze below' mode={mode} />}/>  */}
      <Textform showAlert={showAlert} heading='Enter text to analyze below' mode={mode} />
      {/* <Newbar/> */}
      {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Introduction/>} />
        </Routes>
      </BrowserRouter> */}
      {/* ----Router Tutorial */}
      {/* <Introduction/> */}
      {/* <PageComponents/> */}
    </>
  );
}

export default App;
