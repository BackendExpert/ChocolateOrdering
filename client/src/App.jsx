import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import SignIn from "./components/LoginSignUpTW/SignIn";
import SignUp from "./components/LoginSignUpTW/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./components/HomePage/HomePage";
import Nav from "./components/HomePage/Nav";
import ProductStore from "./components/Products/ProductStore";
import DashHome from "./components/Dashboard/DashHome";
import  secureLocalStorage  from  "react-secure-storage"

function AppWrapper() {
  const location = useLocation();
  const path = location.pathname;

  const displayNav = ['/', '/ProductStore', '/SignIn', '/SignUp'].includes(path);

  return (
    <div>
      {displayNav ? <Nav /> : <div></div>}
    </div>
  );
}

export default function App() {
  return (
    <div className="">        
      <BrowserRouter>
        <AppWrapper />
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/ProductStore" element={<ProductStore /> } />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp /> } />
          <Route path="/Dashboard/" element={<PrivateRoute ProtectRoute={<Dashboard />} />} >
            <Route path="Home" element={<PrivateRoute ProtectRoute={<DashHome /> } /> } />
          </Route>
        </Routes> 
      </BrowserRouter>
    </div>
  )
}