import logo from "../../assets/LogoD.jpeg"





const Logo = () => {
  return (
    
      
<div className="flex items-center">

<img src={logo} alt="" className="w-10 h-10 rounded-full"/>

<div className="flex-col -space-y-2 text-gray-200">
    <p className="text-sm font-serif">Debby's </p>
    <p className="text-sm font-serif">Kitchen</p>
</div>



      </div>

    
  )
}

export default Logo
