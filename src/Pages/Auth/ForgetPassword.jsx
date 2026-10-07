import { useNavigate } from "react-router-dom";
import AuthForm from "../../Components/Auth/AuthForm";
import Input from "../../Components/UI/Input";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const reset = () => {
    navigate("/otp");
  };

  //   const handleSubmit = (e) => {

  //     {
  //     e.preventDefault();

  //     console.log("Sign up");
  //   }};

  return (
    <AuthForm
      title="Forgot Password"
      buttonText="Reset my Password"
      onSubmit={reset}
    >
      <div>
        <p className="text-black text-xs">
          Please provide the email address associated with your account to
          recover your password
        </p>
      </div>

      <Input type="email" placeholder="Email" />
    </AuthForm>
  );
};

export default ForgetPassword;
