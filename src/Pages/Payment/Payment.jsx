import { useState } from "react"
import Button from "../../Components/UI/button"
import Modal from "../../Components/UI/modal"




const Payment = () => {
const [isOpen, setIsOpen] = useState(false)



  return (
    <div className="flex justify-center items-center  ">
      <div className="bg-indigo-300/25 xl:w-120 xl:h-120 w-85 h-99 mt-20 p-7 ">
        <div className="flex justify-between items-center">
            <p>Debby's kitchen</p>
            <p className="font-bold text-sm bg-linear-to-r from-[#D83B3B] to-[#C92B67] bg-clip-text text-transparent">
  Squad
</p>
        </div>


<p className="font-bold flex justify-center items-baseline xl:mt-20 md:mt-20 mt-10 text-indigo-950 text-5xl">
  <span className="text-sm font-bold mr-1.5">NGN</span>
  19,000
</p>

<div>
    <div className="flex justify-between items-center mt-15">
    <p>Email:</p>
    <p>herbertnzube@gmail.com</p>
</div>

<div className="flex justify-between items-center mt-3">
    <p>Reference:</p>
    <p>herbertnzube@gmail.com</p>
</div>
</div>

 <Button
variant="delete"
className="w-full h-10 md:mt-30 mt-15"
 onClick={() => setIsOpen(true)}
>
pay NGN 19,000
</Button>


<Modal
isOpen={isOpen}
onClose={() => setIsOpen(false)}





>
<div className="flex justify-between items-center">
    <p className="bg-blue-200/25 p-3 rounded-full">H</p>
    <p>herbertcollins@gmail.com</p>
</div>


</Modal>

      </div>
    </div>
  )
}

export default Payment
