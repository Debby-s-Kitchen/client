// OTP.jsx
import AuthForm from "../../Components/Auth/AuthForm";
import Input from "../../Components/UI/Input";
import { useNavigate } from "react-router-dom";


const OTP = () => {
  const navigate = useNavigate();

const otp = () => {
    navigate("/resetpassword")
}

  

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