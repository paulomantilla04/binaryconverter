import Binary from "./pages/Binary";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Decimal from './pages/Decimal';
import { GoSun } from "react-icons/go";
import { GoMoon } from "react-icons/go";
import Error from "./pages/Error";
function App() {

  const [theme, setTheme] = useState("light")
  const [icon, setIcon] = useState(<GoMoon/>)

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html').classList.add('dark')
      setIcon(<GoSun/>)
    } else {
      document.querySelector('html').classList.remove('dark')
      setIcon(<GoMoon/>)
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  
  return (
    <>
      <Router>
        <Header icon={icon} onClick={handleTheme}/>
        <Routes>
          <Route exact path="/" element={<Binary/>}></Route>
          <Route exact path="/decbin" element={<Decimal/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
