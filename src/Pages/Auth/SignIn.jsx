import AuthForm from "../../Components/Auth/AuthForm";
import Input from "../../Components/UI/Input";
import { useNavigate } from "react-router-dom";












const SignIn = () => {

const navigate = useNavigate();
const forgot = () => {
    navigate("/forgetpassword")
}

const sign = () => {
    navigate("/")
}
    
 

  return (
    <AuthForm
      title="Welcome Back"
      buttonText="SignIn"
      onSubmit={sign}
    >

      

      <Input
        type="email"
        placeholder="Email"
      />

      <Input
        type="password"
        placeholder="Password"
      />


      <div>
        <p>  <span className="text-teal-800 cursor-pointer border-b" onClick={forgot} >Forgot Password?</span>  </p>
      </div>

    </AuthForm>
  );
};

export default SignIn;