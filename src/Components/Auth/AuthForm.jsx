import logo from "../../assets/LogoD.jpeg"
import { useNavigate } from "react-router-dom";





const AuthForm = ({ children, onSubmit, title, buttonText }) => {


const navigate = useNavigate();

const handleDash = () => {
    navigate("/")
}


  return (
    <div className="min-h-screen -mt-5 flex items-center justify-center" >
      <div className="w-full max-w-md p-6">

        
        <div className="flex justify-center align-middle items-center mb-6" onClick={handleDash}>
         <img src={logo} alt="" className="w-10 h-10 rounded-full"
         
         
         />


<div className="flex-col -space-y-2 text-gray-600">
    <p className="text-sm font-serif">Debby's </p>
    <p className="text-sm font-serif">Kitchen</p>
</div>
          
        </div>

      
        {title && (
          <h1 className="text-2xl font-bold text-center mb-6">
            {title}
          </h1>
        )}

        
        <form onSubmit={onSubmit} className="space-y-4">

          
          {children}

          
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            {buttonText}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AuthForm;