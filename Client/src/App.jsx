import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredits from "./pages/BuyCredits";

import Nav from "./components/Navbar";
import Login from "./components/Login";
import FooterCom from './components/FooterCom'
import { AppContext } from "./context/appContext";


const App = () => {

  const {showLogin} = useContext(AppContext)
  return (
    <div className="px-4 sm:px-10 md:px-15 lg:px-30
    min-h-screen bg-linear-to-b from-teal-100 to-orange-100">
      <ToastContainer position="top-right"/>
      <Nav/>
      {showLogin && <Login/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredits />} />
      </Routes>
      <FooterCom/>
    </div>
  );
};

export default App;
