import Input from "../../Components/UI/input";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className=" items-center justify-center flex">
      
      

     <div className="relative items-center flex rounded-full">

<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 pt-1.5">
<CiSearch className="text-gray-500"/>
</div>


 <Input 
      placeholder="enter" 
      className="w-48 xl:w-75 md:w-70 bg-gray-200 border-none  rounded-xl ps-8 " />
    </div>


     </div>
  );
};

export default Search;
