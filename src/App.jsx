import Binary from "./pages/Binary";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Decimal from './pages/Decimal';
import Error from "./pages/Error";
function App() {

  return (
    <>
      <Router>
        <Header/>
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
