import Loading from "./Loading";
import { twMerge } from "tailwind-merge"; 





const Button = ({
  children,
  onClick,
  disabled = false,      
  type = "button",
  variant = "primary",
  loading = false,       
  className = "",
}) => {
  const base = "text-sm h-7 font-medium";

  const variants = {
    primary:
      "bg-[#c57111] hover:bg-[#a35d0e]  disabled:bg-[#a35d0e] h-9 rounded-lg", 
    secondary: 
      "border bg-[#c57111] rounded-sm border-none hover:bg-gray-300  text-white disabled:bg-teal-300", 
    delete:
      "border bg-red-600 rounded-sm border-none hover:bg-red-500  text-white disabled:bg-red-300", 
    outline:
      "h-9  border border-[#c57111] rounded-sm cursor-pointer hover:bg-gray-200",
  };

  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled || loading} 
        className={twMerge(base, variants[variant], className)}
        
      >
        <div className="flex justify-center items-center align-middle">
          {loading ? <Loading Size={20} /> : children}
        </div>
      </button>
    </div>
  );
};

export default Button; 