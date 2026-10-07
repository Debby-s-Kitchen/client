// OTP.jsx
import AuthForm from "../../Components/Auth/AuthForm";
import Input from "../../Components/UI/Input";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const OTP = () => {
  const navigate = useNavigate();

const otp = () => {
    navigate("/resetpassword")
}

//   const { state } = useLocation(); 
//   const [otp, setOtp] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

    // console.log("Verify OTP", otp, "for", state?.email, "purpose:", state?.purpose);

    // if (state?.purpose === "signup") {
    //   navigate("/signin");
    // } else if (state?.purpose === "forgot-password") {
    //   navigate("/confirmpassword", { state: { email: state.email } });
    // }
  

  return (
    <AuthForm
      title="Verify Your Email"
      buttonText="Verify OTP"
      onSubmit={otp}
    >
      <Input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        // onChange={(e) => setOtp(e.target.value)}
      />

      <div>
        <p>
          Didn't get a code?{" "}
          <span className="text-teal-800 cursor-pointer border-b">Resend</span>
        </p>
      </div>
    </AuthForm>
  );
};

export default OTP;