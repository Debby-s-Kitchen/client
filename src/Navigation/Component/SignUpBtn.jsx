import Button from "../../Components/UI/Button"
import {  useNavigate } from "react-router-dom"



const SignUpBtn = () => {


const navigate = useNavigate();

const HandleSignUp = () => {
  navigate("/signup");
}


  return (
    <div className="xl:flex md:flex hidden">
      

<Button
variant="primary"
type="button"
loading={false}
disabled={false}
className="xl:w-30 md:w-25 text-black"
onClick={HandleSignUp}
>
    SignUP
</Button>



    </div>
  )
}

export default SignUpBtn
