


import AuthForm from "../../Components/Auth/AuthForm";
import Input from "../../Components/UI/Input";
import { useNavigate } from "react-router-dom";












const ResetPassword = () => {

const navigate = useNavigate();

    
  const handleSubmit = () => {
    navigate("/signin")
  };

  return (
    <AuthForm
      title="Reset Password"
      buttonText="Confirm"
      onSubmit={handleSubmit}
    >

      

      <Input
        type="email"
        placeholder="Email"
      />

      <Input
        type="password"
        placeholder="New Password"
      />

     


      
    </AuthForm>
  );
};

export default ResetPassword;