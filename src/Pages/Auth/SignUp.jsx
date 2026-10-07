import AuthForm from "../../Components/Auth/AuthForm";
import Input from "../../Components/UI/input";
import { useNavigate } from "react-router-dom";












const SignUp = () => {



    const navigate = useNavigate();
    const HansleSignIn = () => {
        navigate("/signin")
    }


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sign up");
  };

  return (
    <AuthForm
      title="Create Account"
      buttonText="Sign Up"
      onSubmit={handleSubmit}
    >

      <Input
        type="text"
        placeholder="First Name"
      />

      <Input
        type="text"
        placeholder="Last Name"
      />

      <Input
        type="email"
        placeholder="Email"
      />

      <Input
        type="password"
        placeholder="Password"
      />


      <div>
        <p>Already have an account?  <span className="text-teal-800 cursor-pointer border-b" onClick={HansleSignIn}>SignIn</span>  </p>
      </div>

    </AuthForm>
  );
};

export default SignUp;