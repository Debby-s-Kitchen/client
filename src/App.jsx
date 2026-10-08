import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardWithSplash from "./Pages/DashBoard/Components/DashboardwithSplash"; // new wrapper
import SignUp from "./Pages/Auth/SignUp";
import SignIn from "./Pages/Auth/SignIn";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import OTP from "./Pages/Auth/Otp";
import Address from "./Pages/Address/Address"
import Checkout from "./Pages/CheckOut/Checkout";
import Payment from "./Pages/Payment/Payment";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/otp" element={<OTP />} />

        <Route path="/address" element={<Address />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />  

        
        <Route path="/" element={<DashboardWithSplash />} />
      </Routes>
    </Router>
  );
}

export default App;