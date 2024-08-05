import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUpTW/SignIn";
import SignUp from "./components/LoginSignUpTW/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./components/HomePage/HomePage";
import Nav from "./components/HomePage/Nav";


export default function App() {
  return (
    <div className="">        
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp /> } />
          <Route path="/Dashboard" element={<PrivateRoute ProtectRoute={<Dashboard /> }/> } />
        </Routes> 
      </BrowserRouter>
    </div>
  )
}