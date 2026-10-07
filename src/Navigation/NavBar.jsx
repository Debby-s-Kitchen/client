import { useState } from "react";
import Logo from "../Components/UI/Logo";
import Search from "../Navigation/Component/Search";
import SignUpBtn from "./Component/SignUpBtn";
import SupportBtn from "./Component/SupportBtn";
import { RiMenu3Fill } from "react-icons/ri";
import { SlEarphonesAlt } from "react-icons/sl";
import { GrFormNextLink } from "react-icons/gr";
import { SiGnuprivacyguard } from "react-icons/si";
import { useNavigate } from "react-router-dom";


export const NavBar = () => {
const [isMenu, setIsMenu] = useState(false)

const navigate = useNavigate();

const HandleSignUp = () => {
  navigate("/signup");
}


  return (
    <div className="bg-[radial-gradient(circle_at_top_right,#472322_0%,#29142E_45%,#1a0e20_100%)] flex justify-between items-center align-middle h-20 px-4 xl:px-10 fixed top-0 z-99 w-full">
      <Logo />

      <Search />

<div className="flex gap-4  ">
  <SupportBtn />
  <SignUpBtn />
</div>

<div className=" relative md:hidden  xl:hidden " >

  <div className=" bg-[#c57111] p-3 rounded-lg" onClick={() => setIsMenu(!isMenu)}>
  <RiMenu3Fill className="text-[#F1E9E1]"/>
</div>




  {isMenu && (


<div className="absolute top-full right-3 mt-2 rounded-lg flex justify-center items-start
              flex-col bg-gray-300 z-50 gap-6 font-semibold text-lg text-center
              cursor-pointer w-82 max-w-[120vw] py-6  ">

<ul className="flex flex-col gap-2  ">

<li className="flex justify-between items-center gap-48  px-3 py-3 hover:bg-amber-500">

<div className="flex items-center gap-2">
  <SlEarphonesAlt />
<p>Support</p>
</div>

<GrFormNextLink />

</li>

<li className="flex items-center justify-between gap-48  px-3 py-3 hover:bg-amber-500" onClick={HandleSignUp}>

<div className="flex items-center gap-2">
  <SiGnuprivacyguard className="text-amber-800"/>
<p className="text-amber-800">SignUp</p>
</div>

<GrFormNextLink />

</li>

</ul>



</div>


)}

</div>




{/* <div
className={`absolute top-18 rounded-lg flex flex-col bg-gray-300 z-50 gap-6 font-semibold
          text-lg transform transition-transform text-center cursor-pointer left-0 w-full
  
 ${isMenu? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} 
  `}

>

<SupportBtn />
  <SignUpBtn />


</div> */}
      
    </div>
  );
};
